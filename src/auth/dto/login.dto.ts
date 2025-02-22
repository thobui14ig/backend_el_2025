import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ name: 'email', default: 'buithanhtho14ig@gmail.com' })
  email: string;

  @ApiProperty({ name: 'password', default: '111111' })
  password: string;
}
