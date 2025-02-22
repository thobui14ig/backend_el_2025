import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Between, DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
    private connection: DataSource,
  ) {}

  async findByEmail(email: string) {
    return this.repo.findOne({
      where: {
        email,
      },
    });
  }

  create(user: CreateUserDto) {
    return this.repo.save(user);
  }

  findById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async getRole(userId: number) {
    const user = await this.findById(userId);
    return user.role;
  }

  update(options: UserEntity) {
    return this.repo.save(options);
  }

  getTodayRegisteredUsers() {
    const startOfDay = dayjs().startOf('day').format('YYYY/MM/DD HH:mm:ss');
    const endOfDay = dayjs().endOf('day').format('YYYY/MM/DD HH:mm:ss');

    return this.repo.find({
      where: {
        createdAt: Between(new Date(startOfDay), new Date(endOfDay)),
      },
    });
  }

  async getUsersNotUseGreater2Day() {
    return this.repo
      .createQueryBuilder('user')
      .where(
        '(user.timeDisconnect IS NULL or DATEDIFF(NOW(), user.timeDisconnect) > 2)',
      )
      .andWhere(
        '(user.timeSendEmail IS NULL or DATEDIFF(NOW(), user.timeSendEmail) >= 2)',
      )
      .getMany();
  }
}
