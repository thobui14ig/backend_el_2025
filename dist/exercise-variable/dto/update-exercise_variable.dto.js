"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExerciseVariableDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_exercise_variable_dto_1 = require("./create-exercise_variable.dto");
class UpdateExerciseVariableDto extends (0, mapped_types_1.PartialType)(create_exercise_variable_dto_1.CreateExerciseVariableDto) {
}
exports.UpdateExerciseVariableDto = UpdateExerciseVariableDto;
//# sourceMappingURL=update-exercise_variable.dto.js.map