import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ name: 'email' })
  email: string;

  @ApiProperty({ name: 'nickName' })
  nickName: string;

  @ApiProperty({ name: 'password' })
  password: string;
}
