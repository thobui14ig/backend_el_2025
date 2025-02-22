import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { getUser } from 'src/helper/user';
import { CreateExcerciseDto } from './dto/create-excercise.dto';
import { ExcerciseService } from './excercise.service';

@Controller('excercise')
@ApiTags('excercise')
export class ExcerciseController {
  constructor(private readonly excerciseService: ExcerciseService) {}

  @Get('random')
  getExerciseRandom(@Req() req: Request) {
    const { userId } = getUser(req);
    return this.excerciseService.getExerciseRandom(userId);
  }

  @Get('random-with-topic/:topicId')
  getExerciseRandomWithTopic(
    @Req() req: Request,
    @Param('topicId', ParseIntPipe) topicId: number,
  ) {
    const { userId } = getUser(req);
    return this.excerciseService.getExerciseRandomWithTopic(userId, topicId);
  }

  @Post()
  create(@Body() createExcerciseDto: CreateExcerciseDto) {
    return this.excerciseService.create(createExcerciseDto);
  }

  @Get()
  findAll() {
    return this.excerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excerciseService.getExercise(+id);
  }

  @ApiOperation({ summary: 'Kiểm tra user có id của bài taaoj chưa' })
  @Get('check-exit-excercise-user/:chapterId')
  checkExitexcerciseOfUser(
    @Param('chapterId') chapterId: number,
    @Req() req: Request,
  ) {
    const { userId } = getUser(req);
    return this.excerciseService.checkExitExcerciseOfUser(chapterId, userId);
  }

  @Delete('delete-with-chapter/:chapterId')
  deleteExcerciseWithChapterId(
    @Param('chapterId') chapterId: number,
    @Req() req: Request,
  ) {
    const { userId } = getUser(req);
    return this.excerciseService.removeExcerciseWithChapterId(
      Number(userId),
      Number(chapterId),
    );
  }

  @Get('check-user-success-exercise/:id')
  checkUserSuccessExercise(@Param('id') id: string, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.excerciseService.checkUserSuccessExercise(Number(id), userId);
  }
}
