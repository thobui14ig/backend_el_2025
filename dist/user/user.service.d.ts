import { UserEntity } from './user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private repo;
    private connection;
    constructor(repo: Repository<UserEntity>, connection: DataSource);
    findByEmail(email: string): Promise<UserEntity>;
    create(user: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findById(id: number): Promise<UserEntity>;
    getRole(userId: number): Promise<number>;
    update(options: UserEntity): Promise<UserEntity>;
    getTodayRegisteredUsers(): Promise<UserEntity[]>;
    getUsersNotUseGreater2Day(): Promise<UserEntity[]>;
}
