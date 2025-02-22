import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { drive_v3, google } from 'googleapis';
import path, { join } from 'path';
import { CreateVariableDto } from 'src/variable/dto/create-variable.dto';
import { VariableService } from 'src/variable/variable.service';
import { Repository } from 'typeorm';
import * as xlsx from 'xlsx';
import { FileEntity } from './file.entity';
import * as _ from 'lodash';

@Injectable()
export class FileService {
  public driver: drive_v3.Drive;

  constructor(
    @InjectRepository(FileEntity)
    private repo: Repository<FileEntity>,
    private readonly variableService: VariableService,
  ) {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
    const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    this.driver = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });
  }

  create(file: Express.Multer.File) {
    const input = {
      name: file.filename,
      src: `${file.filename}`,
    };
    return this.repo.save(input);
  }

  async getBase64(fileId: number, res: any) {
    const file = await this.repo.findOne({
      where: {
        id: fileId,
      },
    });
    const filePath = join(__dirname, '../../../', 'uploads', file.src);
    if (!fs.existsSync(filePath)) {
      res.status(404).send('File not found');
      return;
    }

    // Set content-type header based on file type
    const contentType = this.getFileContentType(filePath);
    if (contentType) {
      res.set('Content-Type', contentType);
    }

    // Send file as binary data
    res.sendFile(filePath);
  }

  async uploadVariableExcel(file: Express.Multer.File) {
    const filePath = join(__dirname, '../../../', 'uploads', file.filename);
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    for (let i = 1; i < jsonData.length; i++) {
      const rowData: any = jsonData[i];
      const variable: CreateVariableDto = {
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

  getFileContentType(filePath: string): string | undefined {
    const extension = filePath.split('.').pop()?.toLowerCase();
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
          body: fs.createReadStream(join(__dirname, '/../../helo.mp3')),
        },
      });

      console.log(123123, createFile.data);

      return createFile.data;
    } catch (error) {
      console.log(13123, error);
    }
  }
}
