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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcerciseVariableEntity = void 0;
const excercise_entity_1 = require("../excercise/excercise.entity");
const typeorm_1 = require("typeorm");
let ExcerciseVariableEntity = class ExcerciseVariableEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExcerciseVariableEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExcerciseVariableEntity.prototype, "exerciseId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExcerciseVariableEntity.prototype, "variableId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExcerciseVariableEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ExcerciseVariableEntity.prototype, "isQuiz", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => excercise_entity_1.ExcerciseEntity, (chapter) => chapter.excercise_variables, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'exerciseId' }),
    __metadata("design:type", excercise_entity_1.ExcerciseEntity)
], ExcerciseVariableEntity.prototype, "exercise", void 0);
ExcerciseVariableEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'excercise_variable' })
], ExcerciseVariableEntity);
exports.ExcerciseVariableEntity = ExcerciseVariableEntity;
//# sourceMappingURL=exercise_variable.entity.js.map