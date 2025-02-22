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
exports.VariableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const variable_entity_1 = require("./variable.entity");
let VariableService = class VariableService {
    constructor(repo, connection) {
        this.repo = repo;
        this.connection = connection;
    }
    create(dto) {
        return this.repo.save(dto);
    }
    findAll() {
        return this.repo.find({
            relations: {
                chapter: {
                    topic: true,
                },
            },
            order: {
                id: 'desc',
            },
        });
    }
    findByChapterId(chapterId) {
        return this.repo.find({
            where: {
                chapterId,
            },
        });
    }
    findOne(id) {
        return this.repo.findOne({
            where: {
                id,
            },
        });
    }
    update(id, updateVariableDto) {
        return `This action updates a #${id} variable`;
    }
    remove(ids) {
        return this.repo.delete(ids);
    }
    removeVariableByChapterIds(chapterIds) {
        return this.repo
            .createQueryBuilder()
            .delete()
            .where('chapterId IN (:...chapterIds)', { chapterIds })
            .execute();
    }
    countTotalVariableInChapter(chapterId) {
        return this.repo
            .createQueryBuilder()
            .select('count(*) as total')
            .where('chapterId = :chapterId', { chapterId })
            .getRawOne();
    }
    async getFourVariableQuiz(id) {
        const variables = await this.repo
            .createQueryBuilder()
            .where('id >= :id', { id })
            .limit(4)
            .getMany();
        if (variables.length < 4) {
            return this.repo
                .createQueryBuilder()
                .where('id <= :id', { id })
                .limit(4)
                .orderBy('id', 'DESC')
                .getMany();
        }
        return variables;
    }
    getTotalLearnedWords(userId) {
        return this.connection.query(`
      SELECT count(*) as total FROM hoctienganh.user_chapter uc
      left join variable v on v.chapterId=uc.chapterId
      where uc.userId = ${userId} and uc.success=1
    `);
    }
};
VariableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(variable_entity_1.VariableEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], VariableService);
exports.VariableService = VariableService;
//# sourceMappingURL=variable.service.js.map