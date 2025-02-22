import { ApiProperty } from '@nestjs/swagger';

export class CreateUserChapterDto {
  @ApiProperty({ name: 'topicId' })
  topicId: number;
}
