import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    server: Server;
    afterInit(server: Server): void;
    handleConnection(client: Socket): Promise<Socket<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>>;
    handleDisconnect(client: Socket): Promise<UserEntity>;
    getDataUserFromToken(client: Socket): Promise<any>;
    updateTimeDisconnectUser(user: UserEntity): Promise<UserEntity>;
}
