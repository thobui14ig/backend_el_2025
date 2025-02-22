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
exports.FolderUploadInterceptor = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let FolderUploadInterceptor = class FolderUploadInterceptor {
    constructor(destinationPath) {
        this.destinationPath = destinationPath;
    }
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const file = request.file;
        if (file) {
            const originalname = file.originalname
                .toLowerCase()
                .replace(/[\s:]+/g, '_')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
            const fileExtension = file.originalname.split('.').pop();
            const modifiedName = `${originalname}.${fileExtension}`;
            const filePath = `${this.destinationPath}/${modifiedName}`;
            fs.writeFileSync(filePath, file.buffer);
            request.filePath = filePath;
            file.originalname = modifiedName;
            file.filename = modifiedName;
        }
        return next.handle();
    }
};
FolderUploadInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], FolderUploadInterceptor);
exports.FolderUploadInterceptor = FolderUploadInterceptor;
//# sourceMappingURL=forlder-upload.js.map