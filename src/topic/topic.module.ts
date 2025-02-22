import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicEntity } from './topic.entity';
import { ChapterModule } from 'src/chapter/chapter.module';
import { VariableModule } from 'src/variable/variable.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TopicEntity]),
    ChapterModule,
    VariableModule,
  ],
  controllers: [TopicController],
  providers: [TopicService],
  exports: [TopicService],
})
export class TopicModule {}
