import { TopicEntity } from 'src/topic/topic.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_topic' })
export class UserTopic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  topicId: number;

  @Column({ default: false })
  success: boolean;

  @Column({ default: false })
  active: boolean;
}
