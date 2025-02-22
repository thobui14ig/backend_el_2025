import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ name: 'email' })
  email: string;

  @ApiProperty({ name: 'nickName' })
  nickName: string;

  @ApiProperty({ name: 'password' })
  password: string;
}
