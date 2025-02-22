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
exports.ExcerciseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../helper/user");
const create_excercise_dto_1 = require("./dto/create-excercise.dto");
const excercise_service_1 = require("./excercise.service");
let ExcerciseController = class ExcerciseController {
    constructor(excerciseService) {
        this.excerciseService = excerciseService;
    }
    getExerciseRandom(req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.excerciseService.getExerciseRandom(userId);
    }
    getExerciseRandomWithTopic(req, topicId) {
        const { userId } = (0, user_1.getUser)(req);
        return this.excerciseService.getExerciseRandomWithTopic(userId, topicId);
    }
    create(createExcerciseDto) {
        return this.excerciseService.create(createExcerciseDto);
    }
    findAll() {
        return this.excerciseService.findAll();
    }
    findOne(id) {
        return this.excerciseService.getExercise(+id);
    }
    checkExitexcerciseOfUser(chapterId, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.excerciseService.checkExitExcerciseOfUser(chapterId, userId);
    }
    deleteExcerciseWithChapterId(chapterId, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.excerciseService.removeExcerciseWithChapterId(Number(userId), Number(chapterId));
    }
    checkUserSuccessExercise(id, req) {
        const { userId } = (0, user_1.getUser)(req);
        return this.excerciseService.checkUserSuccessExercise(Number(id), userId);
    }
};
__decorate([
    (0, common_1.Get)('random'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "getExerciseRandom", null);
__decorate([
    (0, common_1.Get)('random-with-topic/:topicId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('topicId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "getExerciseRandomWithTopic", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_excercise_dto_1.CreateExcerciseDto]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Kiểm tra user có id của bài taaoj chưa' }),
    (0, common_1.Get)('check-exit-excercise-user/:chapterId'),
    __param(0, (0, common_1.Param)('chapterId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "checkExitexcerciseOfUser", null);
__decorate([
    (0, common_1.Delete)('delete-with-chapter/:chapterId'),
    __param(0, (0, common_1.Param)('chapterId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "deleteExcerciseWithChapterId", null);
__decorate([
    (0, common_1.Get)('check-user-success-exercise/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ExcerciseController.prototype, "checkUserSuccessExercise", null);
ExcerciseController = __decorate([
    (0, common_1.Controller)('excercise'),
    (0, swagger_1.ApiTags)('excercise'),
    __metadata("design:paramtypes", [excercise_service_1.ExcerciseService])
], ExcerciseController);
exports.ExcerciseController = ExcerciseController;
//# sourceMappingURL=excercise.controller.js.map