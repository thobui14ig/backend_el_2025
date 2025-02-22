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
exports.ExcerciseEntity = void 0;
const chapter_entity_1 = require("../chapter/chapter.entity");
const exercise_variable_entity_1 = require("../exercise-variable/exercise_variable.entity");
const typeorm_1 = require("typeorm");
let ExcerciseEntity = class ExcerciseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExcerciseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExcerciseEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExcerciseEntity.prototype, "chapterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ExcerciseEntity.prototype, "success", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chapter_entity_1.ChapterEntity, (chapter) => chapter.excercises, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'chapterId' }),
    __metadata("design:type", chapter_entity_1.ChapterEntity)
], ExcerciseEntity.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_variable_entity_1.ExcerciseVariableEntity, (excercise_variable) => excercise_variable.exercise),
    __metadata("design:type", Array)
], ExcerciseEntity.prototype, "excercise_variables", void 0);
ExcerciseEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'excercise' })
], ExcerciseEntity);
exports.ExcerciseEntity = ExcerciseEntity;
//# sourceMappingURL=excercise.entity.js.map