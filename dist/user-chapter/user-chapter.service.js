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
exports.UserChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_chapter_entity_1 = require("./user-chapter.entity");
const chapter_service_1 = require("../chapter/chapter.service");
const excercise_service_1 = require("../excercise/excercise.service");
let UserChapterService = class UserChapterService {
    constructor(repo, chapterService, excerciseService) {
        this.repo = repo;
        this.chapterService = chapterService;
        this.excerciseService = excerciseService;
    }
    async create(topicId, userId) {
        const chapters = await this.chapterService.findByTopicId(topicId);
        for (const [index, chapter] of chapters.entries()) {
            const { id } = chapter;
            let active = false;
            if (index === 0) {
                active = true;
            }
            const isExit = await this.repo.findOne({
                where: {
                    userId,
                    chapterId: id,
                },
            });
            if (!isExit) {
                const userChapter = {
                    userId,
                    chapterId: id,
                    active,
                };
                await this.repo.save(userChapter);
            }
        }
    }
    async update(chapterId, nextId, userId) {
        const USER_CHAPTER = await this.repo.findOne({
            where: {
                userId,
                chapterId,
            },
        });
        const EXCERCISE = await this.excerciseService.findByUserAndChapter(userId, chapterId);
        const [userchapter, excercise] = await Promise.all([
            USER_CHAPTER,
            EXCERCISE,
        ]);
        userchapter.success = true;
        excercise.success = true;
        await Promise.all([
            this.repo.save(userchapter),
            this.excerciseService.update(excercise),
        ]);
        if (nextId) {
            const nextChapter = await this.repo.findOne({
                where: {
                    userId,
                    chapterId: nextId,
                },
            });
            nextChapter.active = true;
            await this.repo.save(nextChapter);
        }
    }
    remove(id) {
        return `This action removes a #${id} userChapter`;
    }
    updateSuccess(userId, chapterId) {
        return this.repo
            .createQueryBuilder()
            .update()
            .set({ success: false })
            .where('chapterId = :chapterId', { chapterId })
            .andWhere('userId = :userId', { userId })
            .execute();
    }
};
UserChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_chapter_entity_1.UserChapterEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => chapter_service_1.ChapterService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => excercise_service_1.ExcerciseService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        chapter_service_1.ChapterService,
        excercise_service_1.ExcerciseService])
], UserChapterService);
exports.UserChapterService = UserChapterService;
//# sourceMappingURL=user-chapter.service.js.map