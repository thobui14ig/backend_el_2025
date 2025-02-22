import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AppGateway],
  controllers: [],
})
export class GatewayModules {}
