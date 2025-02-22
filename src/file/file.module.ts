import { Module } from '@nestjs/common';
import { MulterModule, MulterModuleOptions } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as multer from 'multer';
import { FileController } from './file.controller';
import { FileEntity } from './file.entity';
import { FileService } from './file.service';
import { VariableModule } from 'src/variable/variable.module';

const multerOptions: MulterModuleOptions = {
  storage: multer.diskStorage({
    destination: './../../uploads',
    filename: (req, file, cb) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');

      return cb(null, file.originalname);
    },
  }),
};

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    MulterModule.register(multerOptions),
    VariableModule,
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
