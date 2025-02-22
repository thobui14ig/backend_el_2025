import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateTopicDto } from './dto/create-topic.dto';
import { TopicService } from './topic.service';
import { Request } from 'express';
import { getUser } from 'src/helper/user';

@Controller('topic')
@ApiTags('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get('finished')
  finished(@Req() req: Request) {
    const { userId } = getUser(req);

    return this.topicService.finished(userId);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicService.create(createTopicDto);
  }

  @Get('desc')
  findAllDesc() {
    return this.topicService.findAllDesc();
  }

  @Get('/')
  findAll(@Req() req: Request) {
    const { userId } = getUser(req);
    return this.topicService.findAll(userId);
  }

  @Get('get-all')
  getAll() {
    return this.topicService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.topicService.remove(+id);
  }
}
