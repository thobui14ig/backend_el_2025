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
exports.TopicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_topic_dto_1 = require("./dto/create-topic.dto");
const topic_service_1 = require("./topic.service");
const user_1 = require("../helper/user");
let TopicController = class TopicController {
    constructor(topicService) {
        this.topicService = topicService;
    }
    finished(req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.topicService.finished(userId);
    }
    create(createTopicDto) {
        return this.topicService.create(createTopicDto);
    }
    findAllDesc() {
        return this.topicService.findAllDesc();
    }
    findAll(req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.topicService.findAll(userId);
    }
    getAll() {
        return this.topicService.getAll();
    }
    findOne(id) {
        return this.topicService.findOne(+id);
    }
    async remove(id) {
        return this.topicService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('finished'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "finished", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_topic_dto_1.CreateTopicDto]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('desc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "findAllDesc", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "remove", null);
TopicController = __decorate([
    (0, common_1.Controller)('topic'),
    (0, swagger_1.ApiTags)('topic'),
    __metadata("design:paramtypes", [topic_service_1.TopicService])
], TopicController);
exports.TopicController = TopicController;
//# sourceMappingURL=topic.controller.js.map