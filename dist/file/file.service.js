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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fs = require("fs");
const googleapis_1 = require("googleapis");
const path_1 = require("path");
const variable_service_1 = require("../variable/variable.service");
const typeorm_2 = require("typeorm");
const xlsx = require("xlsx");
const file_entity_1 = require("./file.entity");
const _ = require("lodash");
let FileService = class FileService {
    constructor(repo, variableService) {
        this.repo = repo;
        this.variableService = variableService;
        const CLIENT_ID = process.env.CLIENT_ID;
        const CLIENT_SECRET = process.env.CLIENT_SECRET;
        const REDIRECT_URI = process.env.REDIRECT_URI;
        const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
        const oauth2Client = new googleapis_1.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
        oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
        this.driver = googleapis_1.google.drive({
            version: 'v3',
            auth: oauth2Client,
        });
    }
    create(file) {
        const input = {
            name: file.filename,
            src: `${file.filename}`,
        };
        return this.repo.save(input);
    }
    async getBase64(fileId, res) {
        const file = await this.repo.findOne({
            where: {
                id: fileId,
            },
        });
        const filePath = (0, path_1.join)(__dirname, '../../../', 'uploads', file.src);
        if (!fs.existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }
        const contentType = this.getFileContentType(filePath);
        if (contentType) {
            res.set('Content-Type', contentType);
        }
        res.sendFile(filePath);
    }
    async uploadVariableExcel(file) {
        const filePath = (0, path_1.join)(__dirname, '../../../', 'uploads', file.filename);
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
        for (let i = 1; i < jsonData.length; i++) {
            const rowData = jsonData[i];
            const variable = {
                name: rowData[0],
                spell: rowData[1],
                vi: rowData[2],
                chapterId: rowData[3],
            };
            if (!_.some(variable, _.isUndefined)) {
                await this.variableService.create(variable);
            }
        }
        return true;
    }
    getFileContentType(filePath) {
        var _a;
        const extension = (_a = filePath.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (extension) {
            case 'png':
                return 'image/png';
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'gif':
                return 'image/gif';
            default:
                return undefined;
        }
    }
    async uploadFileGoogleApi() {
        try {
            const createFile = await this.driver.files.create({
                requestBody: {
                    name: 'hello.mp3',
                    mimeType: 'audio/mpeg',
                },
                media: {
                    mimeType: 'audio/mpeg',
                    body: fs.createReadStream((0, path_1.join)(__dirname, '/../../helo.mp3')),
                },
            });
            console.log(123123, createFile.data);
            return createFile.data;
        }
        catch (error) {
            console.log(13123, error);
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        variable_service_1.VariableService])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map