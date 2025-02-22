import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { ExerciseVariableService } from './exercise_variable.service';
import { ExerciseVariableController } from './exercise_variable.controller';
import { ExcerciseVariableEntity } from './exercise_variable.entity';
import { ExcerciseModule } from 'src/excercise/excercise.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExcerciseVariableEntity]),
    forwardRef(() => ExcerciseModule),
  ],
  controllers: [ExerciseVariableController],
  providers: [ExerciseVariableService],
  exports: [ExerciseVariableService],
})
export class ExerciseVariableModule {}
