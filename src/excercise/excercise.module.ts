import { Module, forwardRef } from '@nestjs/common';
import { ExcerciseService } from './excercise.service';
import { ExcerciseController } from './excercise.controller';
import { ExcerciseEntity } from './excercise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariableModule } from 'src/variable/variable.module';
import { UserChapterModule } from 'src/user-chapter/user-chapter.module';
import { ExerciseVariableModule } from 'src/exercise-variable/exercise_variable.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExcerciseEntity]),
    VariableModule,
    forwardRef(() => UserChapterModule),
    forwardRef(() => ExerciseVariableModule),
  ],
  controllers: [ExcerciseController],
  providers: [ExcerciseService],
  exports: [ExcerciseService],
})
export class ExcerciseModule {}
