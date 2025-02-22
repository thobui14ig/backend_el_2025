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
exports.ChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const excercise_service_1 = require("../excercise/excercise.service");
const variable_service_1 = require("../variable/variable.service");
const typeorm_2 = require("typeorm");
const chapter_entity_1 = require("./chapter.entity");
let ChapterService = class ChapterService {
    constructor(repo, exerciseService, variableService) {
        this.repo = repo;
        this.exerciseService = exerciseService;
        this.variableService = variableService;
        this.randomId = 0;
    }
    create(chapter) {
        return this.repo.save(chapter);
    }
    findAll() {
        return this.repo.find({
            relations: {
                topic: true,
            },
            order: {
                id: 'DESC',
            },
        });
    }
    findByTopicId(topicId) {
        return this.repo.find({
            where: {
                topicId,
            },
        });
    }
    async getChapterInTopic(topicId) {
        return this.repo
            .createQueryBuilder('chapter')
            .select('MIN(chapter.id)', 'minId')
            .where('chapter.topicId = :topicId', { topicId })
            .getRawOne();
    }
    getVariablesByWithTopic(topicId, chapterId) {
        return this.repo.findOne({
            relations: {
                variables: true,
            },
            where: {
                id: chapterId,
                topicId,
            },
        });
    }
    async getRandomVariable(chapterId, userId) {
        const variables = await this.exerciseService.getAllExcerciseVariables(chapterId, userId);
        const filteredArray = variables.excercise_variables.filter(function (obj) {
            return obj.count < 10;
        });
        if (filteredArray.length === 0) {
            return false;
        }
        const run = () => {
            const randomObject = filteredArray[Math.floor(Math.random() * filteredArray.length)];
            if (filteredArray.length === 1) {
                return randomObject;
            }
            if (randomObject.id === this.randomId) {
                run();
            }
            return randomObject;
        };
        const randomObject = run();
        this.randomId = randomObject.id;
        const total = variables.excercise_variables.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
        return {
            excerciseVariableId: randomObject.id,
            total: variables.excercise_variables.length * 10 - total,
            variable: await this.variableService.findOne(randomObject.variableId),
        };
    }
    async getRandomQuiz(chapterId, userId) {
        const variables = await this.exerciseService.getAllExcerciseVariables(chapterId, userId);
        const filteredArray = variables.excercise_variables.filter(function (obj) {
            return !obj.isQuiz;
        });
        if (filteredArray.length === 0) {
            return false;
        }
        const run = () => {
            const randomObject = filteredArray[Math.floor(Math.random() * filteredArray.length)];
            if (filteredArray.length === 1) {
                return randomObject;
            }
            if (randomObject.id === this.randomId) {
                run();
            }
            return randomObject;
        };
        const randomObject = run();
        this.randomId = randomObject.id;
        return {
            excerciseVariableId: randomObject.id,
            variable: await this.variableService.findOne(randomObject.variableId),
        };
    }
    remove(ids) {
        return this.repo.delete(ids);
    }
    async getNextChapter(topicId, chapterId) {
        const data = await this.repo
            .createQueryBuilder()
            .where('topicId = :topicId', { topicId })
            .andWhere('id >= :chapterId', { chapterId })
            .limit(2)
            .getMany();
        if (data.length === 2) {
            return data[1].id;
        }
        return null;
    }
    getChapterWithTopic(topicId, userId) {
        return this.repo
            .createQueryBuilder('c')
            .select([
            'c.id',
            'c.name',
            'v.id',
            'v.name',
            'uc.id',
            'uc.active',
            'uc.success',
        ])
            .leftJoin('c.variables', 'v')
            .leftJoin('c.userChapter', 'uc', 'uc.userId = :userId', { userId })
            .where('c.topic = :topicId', { topicId })
            .getMany();
    }
};
ChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chapter_entity_1.ChapterEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        excercise_service_1.ExcerciseService,
        variable_service_1.VariableService])
], ChapterService);
exports.ChapterService = ChapterService;
//# sourceMappingURL=chapter.service.js.map