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
exports.ChapterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../helper/user");
const chapter_service_1 = require("./chapter.service");
const create_chapter_dto_1 = require("./dto/create-chapter.dto");
let ChapterController = class ChapterController {
    constructor(chapterService) {
        this.chapterService = chapterService;
    }
    async getVariablesByWithTopic(topicId, chapterId) {
        return this.chapterService.getVariablesByWithTopic(+topicId, +chapterId);
    }
    getRandomVariable(id, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.chapterService.getRandomVariable(+id, userId);
    }
    getRandomQuiz(id, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.chapterService.getRandomQuiz(+id, userId);
    }
    getChapterInTopic(topicId) {
        return this.chapterService.getChapterInTopic(+topicId);
    }
    findAll() {
        return this.chapterService.findAll();
    }
    create(createChapterDto) {
        return this.chapterService.create(createChapterDto);
    }
    remove(id) {
        return this.chapterService.remove(+id);
    }
    getNextChapter(topicId, chapterId) {
        return this.chapterService.getNextChapter(+topicId, +chapterId);
    }
    getChapterWithTopic(topicId, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.chapterService.getChapterWithTopic(topicId, userId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Lấy từ vựng theo chủ đề và chapter' }),
    (0, common_1.Get)('get-variables-with-topicId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('chapterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getVariablesByWithTopic", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Random từ vựng theo khi làm bài tập' }),
    (0, common_1.Get)('variable/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "getRandomVariable", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Random quiz' }),
    (0, common_1.Get)('quiz/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "getRandomQuiz", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Lấy chương đầu tiên của chủ đề' }),
    (0, common_1.Get)('get-chapter-in-topic/:topicId'),
    __param(0, (0, common_1.Param)('topicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "getChapterInTopic", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chapter_dto_1.CreateChapterDto]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('get-next-chapter/:topicId'),
    __param(0, (0, common_1.Param)('topicId')),
    __param(1, (0, common_1.Query)('chapterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "getNextChapter", null);
__decorate([
    (0, common_1.Get)('get-chapter-with-topic/:topicId'),
    __param(0, (0, common_1.Param)('topicId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "getChapterWithTopic", null);
ChapterController = __decorate([
    (0, common_1.Controller)('chapter'),
    (0, swagger_1.ApiTags)('chapter'),
    __metadata("design:paramtypes", [chapter_service_1.ChapterService])
], ChapterController);
exports.ChapterController = ChapterController;
//# sourceMappingURL=chapter.controller.js.map