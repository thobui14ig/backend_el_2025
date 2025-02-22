import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseService } from 'src/excercise/excercise.service';
import { VariableService } from 'src/variable/variable.service';
import { Repository } from 'typeorm';
import { VariableEntity } from './../variable/variable.entity';
import { ChapterEntity } from './chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Injectable()
export class ChapterService {
  private randomId = 0;
  constructor(
    @InjectRepository(ChapterEntity)
    private repo: Repository<ChapterEntity>,
    private readonly exerciseService: ExcerciseService,
    private readonly variableService: VariableService,
  ) {}

  create(chapter: CreateChapterDto) {
    return this.repo.save(chapter);
  }

  findAll() {
    return this.repo.find({
      relations: {
        topic: true,
      },
      order: {
        id: 'DESC',
      },
    });
  }

  findByTopicId(topicId: number) {
    return this.repo.find({
      where: {
        topicId,
      },
    });
  }

  async getChapterInTopic(topicId: number) {
    return this.repo
      .createQueryBuilder('chapter')
      .select('MIN(chapter.id)', 'minId')
      .where('chapter.topicId = :topicId', { topicId })
      .getRawOne();
  }

  getVariablesByWithTopic(topicId: number, chapterId: number) {
    return this.repo.findOne({
      relations: {
        variables: true,
      },
      where: {
        id: chapterId,
        topicId,
      },
    });
  }

  async getRandomVariable(
    chapterId: number,
    userId: number,
  ): Promise<
    | { excerciseVariableId: number; variable: VariableEntity; total: number }
    | boolean
  > {
    const variables = await this.exerciseService.getAllExcerciseVariables(
      chapterId,
      userId,
    );

    const filteredArray = variables.excercise_variables.filter(function (obj) {
      return obj.count < 10;
    });

    if (filteredArray.length === 0) {
      return false;
    }

    const run = () => {
      const randomObject =
        filteredArray[Math.floor(Math.random() * filteredArray.length)];

      if (filteredArray.length === 1) {
        return randomObject;
      }

      if (randomObject.id === this.randomId) {
        run();
      }

      return randomObject;
    };

    const randomObject = run();
    this.randomId = randomObject.id;

    const total = variables.excercise_variables.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0,
    );

    return {
      excerciseVariableId: randomObject.id,
      total: variables.excercise_variables.length * 10 - total,
      variable: await this.variableService.findOne(randomObject.variableId),
    };
  }

  async getRandomQuiz(chapterId: number, userId: number) {
    const variables = await this.exerciseService.getAllExcerciseVariables(
      chapterId,
      userId,
    );

    const filteredArray = variables.excercise_variables.filter(function (obj) {
      return !obj.isQuiz;
    });

    if (filteredArray.length === 0) {
      return false;
    }

    const run = () => {
      const randomObject =
        filteredArray[Math.floor(Math.random() * filteredArray.length)];

      if (filteredArray.length === 1) {
        return randomObject;
      }

      if (randomObject.id === this.randomId) {
        run();
      }

      return randomObject;
    };

    const randomObject = run();
    this.randomId = randomObject.id;

    return {
      excerciseVariableId: randomObject.id,
      variable: await this.variableService.findOne(randomObject.variableId),
    };
  }

  remove(ids: number | number[]) {
    return this.repo.delete(ids);
  }

  async getNextChapter(topicId: number, chapterId: number) {
    const data = await this.repo
      .createQueryBuilder()
      .where('topicId = :topicId', { topicId })
      .andWhere('id >= :chapterId', { chapterId })
      .limit(2)
      .getMany();
    if (data.length === 2) {
      return data[1].id;
    }
    return null;
  }

  getChapterWithTopic(topicId: number, userId: number) {
    return this.repo
      .createQueryBuilder('c')
      .select([
        'c.id',
        'c.name',
        'v.id',
        'v.name',
        'uc.id',
        'uc.active',
        'uc.success',
      ])
      .leftJoin('c.variables', 'v')
      .leftJoin('c.userChapter', 'uc', 'uc.userId = :userId', { userId })
      .where('c.topic = :topicId', { topicId })
      .getMany();
  }
}
