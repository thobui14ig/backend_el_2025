import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginDto, res: Response): Promise<Response<any, Record<string, any>>>;
    register(createUserDto: CreateAuthDto): Promise<import("../user/dto/create-user.dto").CreateUserDto & import("../user/user.entity").UserEntity>;
    refreshToken(body: {
        refreshToken: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
}
