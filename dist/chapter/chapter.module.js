"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterModule = void 0;
const common_1 = require("@nestjs/common");
const chapter_service_1 = require("./chapter.service");
const chapter_controller_1 = require("./chapter.controller");
const chapter_entity_1 = require("./chapter.entity");
const typeorm_1 = require("@nestjs/typeorm");
const excercise_module_1 = require("../excercise/excercise.module");
const variable_module_1 = require("../variable/variable.module");
let ChapterModule = class ChapterModule {
};
ChapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([chapter_entity_1.ChapterEntity]),
            excercise_module_1.ExcerciseModule,
            variable_module_1.VariableModule,
        ],
        controllers: [chapter_controller_1.ChapterController],
        providers: [chapter_service_1.ChapterService],
        exports: [chapter_service_1.ChapterService],
    })
], ChapterModule);
exports.ChapterModule = ChapterModule;
//# sourceMappingURL=chapter.module.js.map