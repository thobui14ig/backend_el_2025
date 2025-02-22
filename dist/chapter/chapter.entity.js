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
exports.ChapterEntity = void 0;
const excercise_entity_1 = require("../excercise/excercise.entity");
const topic_entity_1 = require("../topic/topic.entity");
const user_chapter_entity_1 = require("../user-chapter/user-chapter.entity");
const variable_entity_1 = require("../variable/variable.entity");
const typeorm_1 = require("typeorm");
let ChapterEntity = class ChapterEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChapterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ChapterEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ChapterEntity.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => topic_entity_1.TopicEntity, (topic) => topic.chapters, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", topic_entity_1.TopicEntity)
], ChapterEntity.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => variable_entity_1.VariableEntity, (variable) => variable.chapter),
    __metadata("design:type", Array)
], ChapterEntity.prototype, "variables", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => excercise_entity_1.ExcerciseEntity, (excercise) => excercise.chapter),
    __metadata("design:type", Array)
], ChapterEntity.prototype, "excercises", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_chapter_entity_1.UserChapterEntity, (userChapter) => userChapter.chapter),
    __metadata("design:type", Array)
], ChapterEntity.prototype, "userChapters", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_chapter_entity_1.UserChapterEntity, (userChapter) => userChapter.chapter),
    __metadata("design:type", user_chapter_entity_1.UserChapterEntity)
], ChapterEntity.prototype, "userChapter", void 0);
ChapterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'chapter' })
], ChapterEntity);
exports.ChapterEntity = ChapterEntity;
//# sourceMappingURL=chapter.entity.js.map