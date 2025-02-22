import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from 'src/topic/topic.module';
import { UserTopicController } from './user_topic.controller';
import { UserTopic } from './user_topic.entity';
import { UserTopicService } from './user_topic.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserTopic]), TopicModule],
  controllers: [UserTopicController],
  providers: [UserTopicService],
})
export class UserTopicModule {}
