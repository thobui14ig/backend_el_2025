import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { getUser } from 'src/helper/user';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Controller('chapter')
@ApiTags('chapter')
export class ChapterController {
  constructor(
    private readonly chapterService: ChapterService,
  ) {}

  @ApiOperation({ summary: 'Lấy từ vựng theo chủ đề và chapter' })
  @Get('get-variables-with-topicId/:id')
  async getVariablesByWithTopic(
    @Param('id') topicId: string,
    @Query('chapterId') chapterId: number,
  ) {
    return this.chapterService.getVariablesByWithTopic(+topicId, +chapterId);
  }

  @ApiOperation({ summary: 'Random từ vựng theo khi làm bài tập' })
  @Get('variable/:id')
  getRandomVariable(@Param('id') id: string, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.chapterService.getRandomVariable(+id, userId);
  }

  @ApiOperation({ summary: 'Random quiz' })
  @Get('quiz/:id')
  getRandomQuiz(@Param('id') id: string, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.chapterService.getRandomQuiz(+id, userId);
  }

  @ApiOperation({ summary: 'Lấy chương đầu tiên của chủ đề' })
  @Get('get-chapter-in-topic/:topicId')
  getChapterInTopic(@Param('topicId') topicId: string) {
    return this.chapterService.getChapterInTopic(+topicId);
  }

  @Get('')
  findAll() {
    return this.chapterService.findAll();
  }

  @Post('')
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chapterService.create(createChapterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chapterService.remove(+id);
  }

  @Get('get-next-chapter/:topicId')
  getNextChapter(
    @Param('topicId') topicId: string,
    @Query('chapterId') chapterId: string,
  ) {
    return this.chapterService.getNextChapter(+topicId, +chapterId);
  }

  @Get('get-chapter-with-topic/:topicId')
  getChapterWithTopic(@Param('topicId') topicId: number, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.chapterService.getChapterWithTopic(topicId, userId);
  }
}
