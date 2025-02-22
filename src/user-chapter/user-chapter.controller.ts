import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { getUser } from 'src/helper/user';
import { UserChapterService } from './user-chapter.service';

@Controller('user-chapter')
export class UserChapterController {
  constructor(private readonly userChapterService: UserChapterService) {}

  @Post()
  create(@Body('topicId') topicId: number, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.userChapterService.create(topicId, userId);
  }

  @Patch()
  update(
    @Body() body: { chapterId: number; nextChapter: number },
    @Req() req: Request,
  ) {
    const { chapterId, nextChapter } = body;
    const { userId } = getUser(req);
    return this.userChapterService.update(chapterId, nextChapter, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userChapterService.remove(+id);
  }
}
