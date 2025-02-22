"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChapterModule = void 0;
const common_1 = require("@nestjs/common");
const user_chapter_service_1 = require("./user-chapter.service");
const user_chapter_controller_1 = require("./user-chapter.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_chapter_entity_1 = require("./user-chapter.entity");
const chapter_module_1 = require("../chapter/chapter.module");
const excercise_module_1 = require("../excercise/excercise.module");
let UserChapterModule = class UserChapterModule {
};
UserChapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_chapter_entity_1.UserChapterEntity]),
            (0, common_1.forwardRef)(() => chapter_module_1.ChapterModule),
            (0, common_1.forwardRef)(() => excercise_module_1.ExcerciseModule),
        ],
        controllers: [user_chapter_controller_1.UserChapterController],
        providers: [user_chapter_service_1.UserChapterService],
        exports: [user_chapter_service_1.UserChapterService],
    })
], UserChapterModule);
exports.UserChapterModule = UserChapterModule;
//# sourceMappingURL=user-chapter.module.js.map