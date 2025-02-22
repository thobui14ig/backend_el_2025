"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTopicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const topic_module_1 = require("../topic/topic.module");
const user_topic_controller_1 = require("./user_topic.controller");
const user_topic_entity_1 = require("./user_topic.entity");
const user_topic_service_1 = require("./user_topic.service");
let UserTopicModule = class UserTopicModule {
};
UserTopicModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_topic_entity_1.UserTopic]), topic_module_1.TopicModule],
        controllers: [user_topic_controller_1.UserTopicController],
        providers: [user_topic_service_1.UserTopicService],
    })
], UserTopicModule);
exports.UserTopicModule = UserTopicModule;
//# sourceMappingURL=user_topic.module.js.map