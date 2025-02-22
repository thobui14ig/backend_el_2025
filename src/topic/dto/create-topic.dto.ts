import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({ name: 'name' })
  name: string;

  @ApiProperty({ name: 'fileId' })
  fileId: number;
}
