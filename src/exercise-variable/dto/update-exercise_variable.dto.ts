import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseVariableDto } from './create-exercise_variable.dto';

export class UpdateExerciseVariableDto extends PartialType(CreateExerciseVariableDto) {}
