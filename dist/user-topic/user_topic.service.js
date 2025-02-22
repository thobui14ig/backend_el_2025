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
exports.UserTopicService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const topic_service_1 = require("../topic/topic.service");
const typeorm_2 = require("typeorm");
const user_topic_entity_1 = require("./user_topic.entity");
let UserTopicService = class UserTopicService {
    constructor(repo, topicService) {
        this.repo = repo;
        this.topicService = topicService;
    }
    async create(userId) {
        const topics = await this.topicService.getAll();
        for (const [index, topic] of topics.entries()) {
            const { id } = topic;
            let active = false;
            if (index === 0) {
                active = true;
            }
            const isExit = await this.repo.findOne({
                where: {
                    userId,
                    topicId: id,
                },
            });
            if (!isExit) {
                const userTopic = {
                    userId,
                    topicId: id,
                    active,
                };
                await this.repo.save(userTopic);
            }
        }
    }
    findAll() {
        return `This action returns all userTopic`;
    }
    findOne(id) {
        return `This action returns a #${id} userTopic`;
    }
    async update(topicId, userId) {
        const topic = await this.repo.findOne({
            where: {
                userId,
                topicId,
            },
        });
        topic.success = true;
        await this.repo.save(topic);
        const nextTopic = await this.topicService.getNextTopic(topicId);
        if (nextTopic) {
            const userTopic = await this.repo.findOne({
                where: {
                    userId,
                    topicId: nextTopic,
                },
            });
            userTopic.active = true;
            await this.repo.save(userTopic);
        }
    }
    remove(id) {
        return `This action removes a #${id} userTopic`;
    }
    getStatus(userId, topicId) { }
};
UserTopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_topic_entity_1.UserTopic)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        topic_service_1.TopicService])
], UserTopicService);
exports.UserTopicService = UserTopicService;
//# sourceMappingURL=user_topic.service.js.map