import { ApiProperty } from '@nestjs/swagger';

export class CreateChapterDto {
  @ApiProperty({ name: 'name' })
  name: string;

  @ApiProperty({ name: 'topicId' })
  topicId: number;
}
