import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/libs/guard/guard';
import { FileService } from './file.service';

@Controller('file')
@Public()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.create(file);
  }

  @Get('get-base64/:fileId')
  getBase64(@Param('fileId') fileId: string, @Res() res: any) {
    return this.fileService.getBase64(+fileId, res);
  }

  @Post('upload-variable-excel')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileExcel(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    try {
      return this.fileService.uploadVariableExcel(file);
    } catch (err) {
      throw new BadRequestException(
        'Có lỗi xảy ra, kiểm tra lại file gửi lên!',
      );
    }
  }

  @Get('google-api')
  uploadFileGoogleApi() {
    return this.fileService.uploadFileGoogleApi();
  }
}
