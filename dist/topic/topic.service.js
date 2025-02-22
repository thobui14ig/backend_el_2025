"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicService = void 0;
const chapter_service_1 = require("./../chapter/chapter.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const topic_entity_1 = require("./topic.entity");
const variable_service_1 = require("../variable/variable.service");
let TopicService = class TopicService {
    constructor(repo, connection, chapterService, variableService) {
        this.repo = repo;
        this.connection = connection;
        this.chapterService = chapterService;
        this.variableService = variableService;
    }
    create(createTopicDto) {
        return this.repo.save(createTopicDto);
    }
    findAllDesc() {
        return this.repo.find({
            order: {
                id: 'DESC',
            },
        });
    }
    async findAll(userId) {
        return this.connection.query(`
      with k1 as(
        SELECT t.*, COUNT(DISTINCT c.id) AS chapterCount, COUNT(a.id) AS variableCount
        FROM topic t 
        
        LEFT JOIN chapter c ON c.topicId=t.id  
        LEFT JOIN variable a ON a.chapterId=c.id 
        
        GROUP BY t.id
        )
        select k1.*, ut.active, ut.success from  k1
        left join user_topic ut on ut.topicId = k1.id and ut.userId = ${userId}
    `);
    }
    findOne(id) {
        return this.repo.findOne({
            where: {
                id,
            },
        });
    }
    getAll() {
        return this.repo.find();
    }
    update(id, updateTopicDto) {
        return `This action updates a #${id} topic`;
    }
    remove(id) {
        return this.repo.delete(id);
    }
    async removeChaptersAndVariables(topicId) {
        const chapters = await this.chapterService.findByTopicId(topicId);
        const chapterIds = chapters.map((item) => item.id);
        await this.variableService.removeVariableByChapterIds(chapterIds);
        return this.chapterService.remove(chapterIds);
    }
    async getNextTopic(topicId) {
        const data = await this.repo
            .createQueryBuilder()
            .where('id >= :topicId', { topicId })
            .limit(2)
            .getMany();
        if (data.length === 2) {
            return data[1].id;
        }
        return null;
    }
    finished(userId) {
        return this.connection.query(`
      select t.id, t.name from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      join chapter c on c.id=uc.chapterId
      join topic t on t.id=c.topicId
      where userId=${userId}
      and success=1
      group by t.id, t.name
    `);
    }
};
TopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(topic_entity_1.TopicEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource,
        chapter_service_1.ChapterService,
        variable_service_1.VariableService])
], TopicService);
exports.TopicService = TopicService;
//# sourceMappingURL=topic.service.js.map