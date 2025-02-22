import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { VariableService } from 'src/variable/variable.service';
import { DataSource, Repository } from 'typeorm';
import { CreateExcerciseDto } from './dto/create-excercise.dto';
import { ExcerciseEntity } from './excercise.entity';
import { ExerciseVariableService } from 'src/exercise-variable/exercise_variable.service';
import { ExcerciseVariableEntity } from 'src/exercise-variable/exercise_variable.entity';

@Injectable()
export class ExcerciseService {
  constructor(
    @InjectRepository(ExcerciseEntity)
    private repo: Repository<ExcerciseEntity>,
    private readonly variableService: VariableService,
    private readonly exerciseVariableService: ExerciseVariableService,
    private connection: DataSource,
  ) {}

  create(createExcerciseDto: CreateExcerciseDto) {
    return 'This action adds a new excercise';
  }

  findAll() {
    return `This action returns all excercise`;
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  getExercise(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: {
        excercise_variables: true,
      },
    });
  }

  update(updateExcerciseDto: any) {
    return this.repo.save(updateExcerciseDto);
  }

  remove(id: number) {
    return `This action removes a #${id} excercise`;
  }

  getAllExcerciseVariables(chapterId: number, userId: number) {
    return this.repo
      .createQueryBuilder('e')
      .leftJoinAndSelect('e.excercise_variables', 'ev')
      .where('e.chapterId = :chapterId', { chapterId })
      .andWhere('e.userId = :userId', { userId })
      .getOne();
  }

  async checkExitExcerciseOfUser(chapterId: number, userId: number) {
    const exercise = await this.repo.findOne({
      where: {
        chapterId,
        userId,
      },
    });

    if (!exercise) {
      const variables = await this.variableService.findByChapterId(chapterId);
      const input: Pick<ExcerciseEntity, 'chapterId' | 'userId'> = {
        chapterId,
        userId,
      };

      const excercise = await this.repo.save(input);

      const inputExVa: ExcerciseVariableEntity[] = variables.map((item) => {
        return {
          exerciseId: excercise.id,
          variableId: item.id,
        };
      });

      return this.exerciseVariableService.create(inputExVa);
    }
  }

  async removeExcerciseWithChapterId(userId: number, chapterId: number) {
    return this.repo
      .createQueryBuilder()
      .delete()
      .where('chapterId = :chapterId', { chapterId })
      .andWhere('userId = :userId', { userId })
      .execute();
  }

  findByUserAndChapter(userId: number, chapterId: number) {
    return this.repo.findOne({
      where: {
        userId,
        chapterId,
      },
    });
  }

  checkUserSuccessExercise(id: number, userId: number) {
    return this.repo.findOne({
      where: {
        chapterId: id,
        userId,
      },
    });
  }

  getExerciseRandom(userId: number) {
    return this.connection.query(`
      select v.* from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      where userId=${userId}
      and success=1
    `);
  }

  getExerciseRandomWithTopic(userId: number, topicId: number) {
    return this.connection.query(`
      select v.* from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      join chapter c on c.id=uc.chapterId
      join topic t on t.id=c.topicId
      where userId=${userId}
      and success=1
      and t.id=${topicId}
    `);
  }
}
