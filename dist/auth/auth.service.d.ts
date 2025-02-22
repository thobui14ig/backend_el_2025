import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register(auth: CreateAuthDto): Promise<import("../user/dto/create-user.dto").CreateUserDto & import("../user/user.entity").UserEntity>;
    signIn(email: any, pass: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    createToken(payload: {
        email: string;
        userId: number;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refreshToken: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
