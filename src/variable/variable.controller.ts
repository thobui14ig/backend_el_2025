import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { VariableService } from './variable.service';
import { CheckTenVariableInterceptor } from './interceptors/check-ten-variable.interceptor';
import { getUser } from 'src/helper/user';
import { Request } from 'express';

@Controller('variable')
@ApiTags('variable')
export class VariableController {
  constructor(private readonly variableService: VariableService) {}

  @Get('get-total-learned-words')
  async getTotalLearnedWords(@Req() req: Request) {
    const { userId } = getUser(req);
    try {
      const [{ total }] = await this.variableService.getTotalLearnedWords(
        +userId,
      );

      return total;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post()
  @UseInterceptors(CheckTenVariableInterceptor)
  create(@Body() createVariableDto: CreateVariableDto) {
    return this.variableService.create(createVariableDto);
  }

  @Get()
  findAll() {
    return this.variableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variableService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVariableDto: UpdateVariableDto,
  ) {
    return this.variableService.update(+id, updateVariableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variableService.remove(+id);
  }

  @Get('total-variable-in-chapter/:chapterId')
  totalVariableInChapter(@Param('chapterId') chapterId: number) {
    return this.variableService.countTotalVariableInChapter(chapterId);
  }

  @Get('get-four-variable-quiz/:id')
  getFourVariableQuiz(@Param('id') id: string) {
    return this.variableService.getFourVariableQuiz(+id);
  }
}
