import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  nickName: string;

  @Column({ default: 0 })
  role: number;

  @Column()
  password: string;

  @Column({ name: 'time_disconnect', default: null })
  timeDisconnect?: Date;

  @Column({ name: 'time_send_email', default: null })
  timeSendEmail?: Date;

  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}
