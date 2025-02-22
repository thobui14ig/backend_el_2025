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
exports.VariableController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_variable_dto_1 = require("./dto/create-variable.dto");
const update_variable_dto_1 = require("./dto/update-variable.dto");
const variable_service_1 = require("./variable.service");
const check_ten_variable_interceptor_1 = require("./interceptors/check-ten-variable.interceptor");
const user_1 = require("../helper/user");
let VariableController = class VariableController {
    constructor(variableService) {
        this.variableService = variableService;
    }
    async getTotalLearnedWords(req) {
        const { userId } = (0, user_1.getUser)(req);
        try {
            const [{ total }] = await this.variableService.getTotalLearnedWords(+userId);
            return total;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    create(createVariableDto) {
        return this.variableService.create(createVariableDto);
    }
    findAll() {
        return this.variableService.findAll();
    }
    findOne(id) {
        return this.variableService.findOne(+id);
    }
    update(id, updateVariableDto) {
        return this.variableService.update(+id, updateVariableDto);
    }
    remove(id) {
        return this.variableService.remove(+id);
    }
    totalVariableInChapter(chapterId) {
        return this.variableService.countTotalVariableInChapter(chapterId);
    }
    getFourVariableQuiz(id) {
        return this.variableService.getFourVariableQuiz(+id);
    }
};
__decorate([
    (0, common_1.Get)('get-total-learned-words'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VariableController.prototype, "getTotalLearnedWords", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(check_ten_variable_interceptor_1.CheckTenVariableInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_variable_dto_1.CreateVariableDto]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_variable_dto_1.UpdateVariableDto]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('total-variable-in-chapter/:chapterId'),
    __param(0, (0, common_1.Param)('chapterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "totalVariableInChapter", null);
__decorate([
    (0, common_1.Get)('get-four-variable-quiz/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VariableController.prototype, "getFourVariableQuiz", null);
VariableController = __decorate([
    (0, common_1.Controller)('variable'),
    (0, swagger_1.ApiTags)('variable'),
    __metadata("design:paramtypes", [variable_service_1.VariableService])
], VariableController);
exports.VariableController = VariableController;
//# sourceMappingURL=variable.controller.js.map