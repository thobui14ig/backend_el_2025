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
exports.ExerciseVariableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const excercise_service_1 = require("../excercise/excercise.service");
const typeorm_2 = require("typeorm");
const util_1 = require("util");
const exercise_variable_entity_1 = require("./exercise_variable.entity");
let ExerciseVariableService = class ExerciseVariableService {
    constructor(repo, exerciseService) {
        this.repo = repo;
        this.exerciseService = exerciseService;
    }
    create(createExerciseVariableDto) {
        if ((0, util_1.isArray)(createExerciseVariableDto)) {
            return this.repo.save(createExerciseVariableDto);
        }
        return this.repo.save(createExerciseVariableDto);
    }
    findAll() {
        return `This action returns all exerciseVariable`;
    }
    findOne(id) {
        return `This action returns a #${id} exerciseVariable`;
    }
    update(id, updateExerciseVariableDto) {
        return `This action updates a #${id} exerciseVariable`;
    }
    remove(id) {
        return `This action removes a #${id} exerciseVariable`;
    }
    async countVariable(id) {
        const ev = await this.repo.findOne({
            where: {
                id,
            },
        });
        ev.count = ev.count + 1;
        return this.repo.save(ev);
    }
    getSumCountAndNumRowsExerciseVariable(exerciseId) {
        return this.repo
            .createQueryBuilder()
            .select('SUM(count) as total, count(*) as numRows')
            .where('exerciseId = :exerciseId', { exerciseId })
            .getRawOne();
    }
    async updateIsQuiz(id) {
        const ev = await this.repo.findOne({
            where: {
                id,
            },
        });
        ev.isQuiz = true;
        return this.repo.save(ev);
    }
};
ExerciseVariableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_variable_entity_1.ExcerciseVariableEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => excercise_service_1.ExcerciseService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        excercise_service_1.ExcerciseService])
], ExerciseVariableService);
exports.ExerciseVariableService = ExerciseVariableService;
//# sourceMappingURL=exercise_variable.service.js.map