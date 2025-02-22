import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { ChapterEntity } from './chapter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseModule } from 'src/excercise/excercise.module';
import { VariableModule } from 'src/variable/variable.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChapterEntity]),
    ExcerciseModule,
    VariableModule,
  ],
  controllers: [ChapterController],
  providers: [ChapterService],
  exports: [ChapterService],
})
export class ChapterModule {}
