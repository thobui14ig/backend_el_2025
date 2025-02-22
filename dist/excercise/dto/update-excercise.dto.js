"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExcerciseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_excercise_dto_1 = require("./create-excercise.dto");
class UpdateExcerciseDto extends (0, mapped_types_1.PartialType)(create_excercise_dto_1.CreateExcerciseDto) {
}
exports.UpdateExcerciseDto = UpdateExcerciseDto;
//# sourceMappingURL=update-excercise.dto.js.map