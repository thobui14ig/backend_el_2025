import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

interface IDataToken {
  userId: number;
  email: string;
}

@WebSocketGateway({
  cors: true,
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('Socket.IO server initialized');
  }

  async handleConnection(client: Socket) {
    return client;
  }

  async handleDisconnect(client: Socket) {
    try {
      console.log('Ngat ket noi!.', client.id);
      const user = await this.getDataUserFromToken(client);

      return this.updateTimeDisconnectUser(user);
    } catch (ex) {
      console.error('Not found');
    }
  }

  async getDataUserFromToken(client: Socket): Promise<any> {
    const authToken: any = client.handshake?.query?.token;
    const dataDecode: IDataToken = this.jwtService.verify(authToken);

    return this.userService.findById(dataDecode.userId); // response to function
  }

  updateTimeDisconnectUser(user: UserEntity) {
    user.timeDisconnect = new Date();

    return this.userService.update(user);
  }
}
