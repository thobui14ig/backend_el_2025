import { Module, forwardRef } from '@nestjs/common';
import { UserChapterService } from './user-chapter.service';
import { UserChapterController } from './user-chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserChapterEntity } from './user-chapter.entity';
import { ChapterModule } from 'src/chapter/chapter.module';
import { ExcerciseModule } from 'src/excercise/excercise.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserChapterEntity]),
    forwardRef(() => ChapterModule),
    forwardRef(() => ExcerciseModule),
  ],
  controllers: [UserChapterController],
  providers: [UserChapterService],
  exports: [UserChapterService],
})
export class UserChapterModule {}
