/// <reference types="multer" />
import { drive_v3 } from 'googleapis';
import { VariableService } from 'src/variable/variable.service';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
export declare class FileService {
    private repo;
    private readonly variableService;
    driver: drive_v3.Drive;
    constructor(repo: Repository<FileEntity>, variableService: VariableService);
    create(file: Express.Multer.File): Promise<{
        name: string;
        src: string;
    } & FileEntity>;
    getBase64(fileId: number, res: any): Promise<void>;
    uploadVariableExcel(file: Express.Multer.File): Promise<boolean>;
    getFileContentType(filePath: string): string | undefined;
    uploadFileGoogleApi(): Promise<drive_v3.Schema$File>;
}
