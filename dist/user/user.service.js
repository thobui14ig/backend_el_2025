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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const dayjs = require("dayjs");
let UserService = class UserService {
    constructor(repo, connection) {
        this.repo = repo;
        this.connection = connection;
    }
    async findByEmail(email) {
        return this.repo.findOne({
            where: {
                email,
            },
        });
    }
    create(user) {
        return this.repo.save(user);
    }
    findById(id) {
        return this.repo.findOne({
            where: {
                id,
            },
        });
    }
    async getRole(userId) {
        const user = await this.findById(userId);
        return user.role;
    }
    update(options) {
        return this.repo.save(options);
    }
    getTodayRegisteredUsers() {
        const startOfDay = dayjs().startOf('day').format('YYYY/MM/DD HH:mm:ss');
        const endOfDay = dayjs().endOf('day').format('YYYY/MM/DD HH:mm:ss');
        return this.repo.find({
            where: {
                createdAt: (0, typeorm_2.Between)(new Date(startOfDay), new Date(endOfDay)),
            },
        });
    }
    async getUsersNotUseGreater2Day() {
        return this.repo
            .createQueryBuilder('user')
            .where('(user.timeDisconnect IS NULL or DATEDIFF(NOW(), user.timeDisconnect) > 2)')
            .andWhere('(user.timeSendEmail IS NULL or DATEDIFF(NOW(), user.timeSendEmail) >= 2)')
            .getMany();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map