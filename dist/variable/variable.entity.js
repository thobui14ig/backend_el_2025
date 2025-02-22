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
exports.VariableEntity = void 0;
const chapter_entity_1 = require("../chapter/chapter.entity");
const typeorm_1 = require("typeorm");
let VariableEntity = class VariableEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VariableEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VariableEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VariableEntity.prototype, "vi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VariableEntity.prototype, "spell", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VariableEntity.prototype, "chapterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], VariableEntity.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'json' }),
    __metadata("design:type", String)
], VariableEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chapter_entity_1.ChapterEntity, (chapter) => chapter.variables, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", chapter_entity_1.ChapterEntity)
], VariableEntity.prototype, "chapter", void 0);
VariableEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'variable' })
], VariableEntity);
exports.VariableEntity = VariableEntity;
//# sourceMappingURL=variable.entity.js.map