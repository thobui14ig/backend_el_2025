"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserTopicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_topic_dto_1 = require("./create-user_topic.dto");
class UpdateUserTopicDto extends (0, swagger_1.PartialType)(create_user_topic_dto_1.CreateUserTopicDto) {
}
exports.UpdateUserTopicDto = UpdateUserTopicDto;
//# sourceMappingURL=update-user_topic.dto.js.map