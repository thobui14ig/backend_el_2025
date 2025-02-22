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
exports.UserTopicController = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../helper/user");
const user_topic_service_1 = require("./user_topic.service");
let UserTopicController = class UserTopicController {
    constructor(userTopicService) {
        this.userTopicService = userTopicService;
    }
    create(req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.userTopicService.create(userId);
    }
    findAll() {
        return this.userTopicService.findAll();
    }
    findOne(id) {
        return this.userTopicService.findOne(+id);
    }
    update(topicId, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.userTopicService.update(topicId, userId);
    }
    remove(id) {
        return this.userTopicService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserTopicController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserTopicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserTopicController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Body)('topicId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserTopicController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserTopicController.prototype, "remove", null);
UserTopicController = __decorate([
    (0, common_1.Controller)('user-topic'),
    __metadata("design:paramtypes", [user_topic_service_1.UserTopicService])
], UserTopicController);
exports.UserTopicController = UserTopicController;
//# sourceMappingURL=user_topic.controller.js.map