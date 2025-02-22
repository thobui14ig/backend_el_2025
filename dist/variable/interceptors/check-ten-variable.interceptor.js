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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTenVariableInterceptor = void 0;
const common_1 = require("@nestjs/common");
const variable_service_1 = require("../variable.service");
let CheckTenVariableInterceptor = class CheckTenVariableInterceptor {
    constructor(service) {
        this.service = service;
    }
    async intercept(context, next) {
        const { body } = context.switchToHttp().getRequest();
        const { chapterId } = body;
        const { total } = await this.service.countTotalVariableInChapter(chapterId);
        if (Number(total) === 10) {
            throw new common_1.BadRequestException('Phần này đã đủ 10 từ vựng!');
        }
        return next.handle().pipe();
    }
};
CheckTenVariableInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [variable_service_1.VariableService])
], CheckTenVariableInterceptor);
exports.CheckTenVariableInterceptor = CheckTenVariableInterceptor;
//# sourceMappingURL=check-ten-variable.interceptor.js.map