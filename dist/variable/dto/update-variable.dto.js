"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVariableDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_variable_dto_1 = require("./create-variable.dto");
class UpdateVariableDto extends (0, mapped_types_1.PartialType)(create_variable_dto_1.CreateVariableDto) {
}
exports.UpdateVariableDto = UpdateVariableDto;
//# sourceMappingURL=update-variable.dto.js.map