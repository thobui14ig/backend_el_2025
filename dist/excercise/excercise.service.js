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
exports.ExcerciseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const variable_service_1 = require("../variable/variable.service");
const typeorm_2 = require("typeorm");
const excercise_entity_1 = require("./excercise.entity");
const exercise_variable_service_1 = require("../exercise-variable/exercise_variable.service");
let ExcerciseService = class ExcerciseService {
    constructor(repo, variableService, exerciseVariableService, connection) {
        this.repo = repo;
        this.variableService = variableService;
        this.exerciseVariableService = exerciseVariableService;
        this.connection = connection;
    }
    create(createExcerciseDto) {
        return 'This action adds a new excercise';
    }
    findAll() {
        return `This action returns all excercise`;
    }
    findOne(id) {
        return this.repo.findOne({
            where: {
                id,
            },
        });
    }
    getExercise(id) {
        return this.repo.findOne({
            where: {
                id,
            },
            relations: {
                excercise_variables: true,
            },
        });
    }
    update(updateExcerciseDto) {
        return this.repo.save(updateExcerciseDto);
    }
    remove(id) {
        return `This action removes a #${id} excercise`;
    }
    getAllExcerciseVariables(chapterId, userId) {
        return this.repo
            .createQueryBuilder('e')
            .leftJoinAndSelect('e.excercise_variables', 'ev')
            .where('e.chapterId = :chapterId', { chapterId })
            .andWhere('e.userId = :userId', { userId })
            .getOne();
    }
    async checkExitExcerciseOfUser(chapterId, userId) {
        const exercise = await this.repo.findOne({
            where: {
                chapterId,
                userId,
            },
        });
        if (!exercise) {
            const variables = await this.variableService.findByChapterId(chapterId);
            const input = {
                chapterId,
                userId,
            };
            const excercise = await this.repo.save(input);
            const inputExVa = variables.map((item) => {
                return {
                    exerciseId: excercise.id,
                    variableId: item.id,
                };
            });
            return this.exerciseVariableService.create(inputExVa);
        }
    }
    async removeExcerciseWithChapterId(userId, chapterId) {
        return this.repo
            .createQueryBuilder()
            .delete()
            .where('chapterId = :chapterId', { chapterId })
            .andWhere('userId = :userId', { userId })
            .execute();
    }
    findByUserAndChapter(userId, chapterId) {
        return this.repo.findOne({
            where: {
                userId,
                chapterId,
            },
        });
    }
    checkUserSuccessExercise(id, userId) {
        return this.repo.findOne({
            where: {
                chapterId: id,
                userId,
            },
        });
    }
    getExerciseRandom(userId) {
        return this.connection.query(`
      select v.* from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      where userId=${userId}
      and success=1
    `);
    }
    getExerciseRandomWithTopic(userId, topicId) {
        return this.connection.query(`
      select v.* from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      join chapter c on c.id=uc.chapterId
      join topic t on t.id=c.topicId
      where userId=${userId}
      and success=1
      and t.id=${topicId}
    `);
    }
};
ExcerciseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(excercise_entity_1.ExcerciseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        variable_service_1.VariableService,
        exercise_variable_service_1.ExerciseVariableService,
        typeorm_2.DataSource])
], ExcerciseService);
exports.ExcerciseService = ExcerciseService;
//# sourceMappingURL=excercise.service.js.map