import { PartialType } from '@nestjs/swagger';
import { CreateUserChapterDto } from './create-user-chapter.dto';

export class UpdateUserChapterDto extends PartialType(CreateUserChapterDto) {}
