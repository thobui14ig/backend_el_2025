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
exports.TopicEntity = void 0;
const chapter_entity_1 = require("../chapter/chapter.entity");
const file_entity_1 = require("../file/file.entity");
const typeorm_1 = require("typeorm");
let TopicEntity = class TopicEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TopicEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TopicEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], TopicEntity.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chapter_entity_1.ChapterEntity, (chapter) => chapter.topic),
    __metadata("design:type", Array)
], TopicEntity.prototype, "chapters", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.FileEntity, (file) => file.topic),
    (0, typeorm_1.JoinColumn)({ name: 'fileId' }),
    __metadata("design:type", file_entity_1.FileEntity)
], TopicEntity.prototype, "file", void 0);
TopicEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'topic' })
], TopicEntity);
exports.TopicEntity = TopicEntity;
//# sourceMappingURL=topic.entity.js.map