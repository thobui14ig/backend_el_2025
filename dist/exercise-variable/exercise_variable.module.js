"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseVariableModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const exercise_variable_service_1 = require("./exercise_variable.service");
const exercise_variable_controller_1 = require("./exercise_variable.controller");
const exercise_variable_entity_1 = require("./exercise_variable.entity");
const excercise_module_1 = require("../excercise/excercise.module");
let ExerciseVariableModule = class ExerciseVariableModule {
};
ExerciseVariableModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([exercise_variable_entity_1.ExcerciseVariableEntity]),
            (0, common_1.forwardRef)(() => excercise_module_1.ExcerciseModule),
        ],
        controllers: [exercise_variable_controller_1.ExerciseVariableController],
        providers: [exercise_variable_service_1.ExerciseVariableService],
        exports: [exercise_variable_service_1.ExerciseVariableService],
    })
], ExerciseVariableModule);
exports.ExerciseVariableModule = ExerciseVariableModule;
//# sourceMappingURL=exercise_variable.module.js.map