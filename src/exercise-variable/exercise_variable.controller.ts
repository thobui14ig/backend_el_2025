import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateExerciseVariableDto } from './dto/create-exercise_variable.dto';
import { ExerciseVariableService } from './exercise_variable.service';

@Controller('exercise-variable')
@ApiTags('exercise-variable')
export class ExerciseVariableController {
  constructor(
    private readonly exerciseVariableService: ExerciseVariableService,
  ) {}

  @Post()
  create(@Body() createExerciseVariableDto: CreateExerciseVariableDto) {
    // return this.exerciseVariableService.create(createExerciseVariableDto);
  }

  @Get()
  findAll() {
    return this.exerciseVariableService.findAll();
  }

  @ApiOperation({ summary: '+1 khi làm bài tập theo từng từ vựng' })
  @Post('countVariable')
  countVariable(@Body('id') id: number) {
    return this.exerciseVariableService.countVariable(id);
  }

  @Patch('update-is-quiz')
  updateIsQuiz(@Body('id') id: number) {
    return this.exerciseVariableService.updateIsQuiz(id);
  }
}
