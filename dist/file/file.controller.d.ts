/// <reference types="multer" />
import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: Express.Multer.File): Promise<{
        name: string;
        src: string;
    } & import("./file.entity").FileEntity>;
    getBase64(fileId: string, res: any): Promise<void>;
    uploadFileExcel(file: Express.Multer.File): Promise<boolean>;
    uploadFileGoogleApi(): Promise<import("googleapis").drive_v3.Schema$File>;
}
