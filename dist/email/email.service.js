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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const schedule_1 = require("@nestjs/schedule");
const user_service_1 = require("../user/user.service");
let EmailService = class EmailService {
    constructor(mailServer, userService) {
        this.mailServer = mailServer;
        this.userService = userService;
    }
    async sendEmailCheckRegisterNotUse() {
        const users = await this.userService.getTodayRegisteredUsers();
        for (const user of users) {
            const option = {
                to: user.email,
                subject: `Thông báo tài khoản mới`,
                template: './notification-not-use',
                context: {
                    username: user.nickName,
                },
            };
            await this.sendEmail(option);
        }
    }
    async sendEmailUsersNotUseGreater2Day() {
        const users = await this.userService.getUsersNotUseGreater2Day();
        for (const user of users) {
            const option = {
                to: user.email,
                subject: `Thông báo không hoạt động`,
                template: './notification-not-use-2day',
                context: {
                    username: user.nickName,
                },
            };
            await this.sendEmail(option);
            user.timeSendEmail = new Date();
            await this.userService.update(user);
        }
    }
    sendEmail({ to, subject, template, context }) {
        return this.mailServer.sendMail({
            to,
            subject,
            template,
            context,
        });
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailCheckRegisterNotUse", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailUsersNotUseGreater2Day", null);
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        user_service_1.UserService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map