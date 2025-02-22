"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcerciseModule = void 0;
const common_1 = require("@nestjs/common");
const excercise_service_1 = require("./excercise.service");
const excercise_controller_1 = require("./excercise.controller");
const excercise_entity_1 = require("./excercise.entity");
const typeorm_1 = require("@nestjs/typeorm");
const variable_module_1 = require("../variable/variable.module");
const user_chapter_module_1 = require("../user-chapter/user-chapter.module");
const exercise_variable_module_1 = require("../exercise-variable/exercise_variable.module");
let ExcerciseModule = class ExcerciseModule {
};
ExcerciseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([excercise_entity_1.ExcerciseEntity]),
            variable_module_1.VariableModule,
            (0, common_1.forwardRef)(() => user_chapter_module_1.UserChapterModule),
            (0, common_1.forwardRef)(() => exercise_variable_module_1.ExerciseVariableModule),
        ],
        controllers: [excercise_controller_1.ExcerciseController],
        providers: [excercise_service_1.ExcerciseService],
        exports: [excercise_service_1.ExcerciseService],
    })
], ExcerciseModule);
exports.ExcerciseModule = ExcerciseModule;
//# sourceMappingURL=excercise.module.js.map