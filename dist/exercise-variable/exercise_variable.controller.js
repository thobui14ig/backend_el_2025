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
exports.ExerciseVariableController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_exercise_variable_dto_1 = require("./dto/create-exercise_variable.dto");
const exercise_variable_service_1 = require("./exercise_variable.service");
let ExerciseVariableController = class ExerciseVariableController {
    constructor(exerciseVariableService) {
        this.exerciseVariableService = exerciseVariableService;
    }
    create(createExerciseVariableDto) {
    }
    findAll() {
        return this.exerciseVariableService.findAll();
    }
    countVariable(id) {
        return this.exerciseVariableService.countVariable(id);
    }
    updateIsQuiz(id) {
        return this.exerciseVariableService.updateIsQuiz(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_variable_dto_1.CreateExerciseVariableDto]),
    __metadata("design:returntype", void 0)
], ExerciseVariableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseVariableController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '+1 khi làm bài tập theo từng từ vựng' }),
    (0, common_1.Post)('countVariable'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseVariableController.prototype, "countVariable", null);
__decorate([
    (0, common_1.Patch)('update-is-quiz'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseVariableController.prototype, "updateIsQuiz", null);
ExerciseVariableController = __decorate([
    (0, common_1.Controller)('exercise-variable'),
    (0, swagger_1.ApiTags)('exercise-variable'),
    __metadata("design:paramtypes", [exercise_variable_service_1.ExerciseVariableService])
], ExerciseVariableController);
exports.ExerciseVariableController = ExerciseVariableController;
//# sourceMappingURL=exercise_variable.controller.js.map