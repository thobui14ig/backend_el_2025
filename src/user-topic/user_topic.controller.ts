import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { getUser } from 'src/helper/user';
import { UserTopicService } from './user_topic.service';

@Controller('user-topic')
export class UserTopicController {
  constructor(private readonly userTopicService: UserTopicService) {}

  @Post()
  create(@Req() req: Request) {
    const { userId } = getUser(req);
    return this.userTopicService.create(userId);
  }

  @Get()
  findAll() {
    return this.userTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTopicService.findOne(+id);
  }

  @Patch('')
  update(@Body('topicId') topicId: number, @Req() req: Request) {
    const { userId } = getUser(req);
    return this.userTopicService.update(topicId, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTopicService.remove(+id);
  }
}
