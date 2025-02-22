import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseService } from 'src/excercise/excercise.service';
import { Repository } from 'typeorm';
import { isArray } from 'util';
import { UpdateExerciseVariableDto } from './dto/update-exercise_variable.dto';
import { ExcerciseVariableEntity } from './exercise_variable.entity';

@Injectable()
export class ExerciseVariableService {
  constructor(
    @InjectRepository(ExcerciseVariableEntity)
    private repo: Repository<ExcerciseVariableEntity>,
    @Inject(forwardRef(() => ExcerciseService))
    private readonly exerciseService: ExcerciseService,
  ) {}

  create(
    createExerciseVariableDto:
      | ExcerciseVariableEntity
      | ExcerciseVariableEntity[],
  ) {
    if (isArray(createExerciseVariableDto)) {
      return this.repo.save(createExerciseVariableDto);
    }

    return this.repo.save(createExerciseVariableDto);
  }

  findAll() {
    return `This action returns all exerciseVariable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseVariable`;
  }

  update(id: number, updateExerciseVariableDto: UpdateExerciseVariableDto) {
    return `This action updates a #${id} exerciseVariable`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseVariable`;
  }

  async countVariable(id: number) {
    const ev = await this.repo.findOne({
      where: {
        id,
      },
    });
    ev.count = ev.count + 1; //tăng điểm của từng từ vựng lên 1
    return this.repo.save(ev);
  }

  getSumCountAndNumRowsExerciseVariable(exerciseId: number) {
    return this.repo
      .createQueryBuilder()
      .select('SUM(count) as total, count(*) as numRows')
      .where('exerciseId = :exerciseId', { exerciseId })
      .getRawOne();
  }

  async updateIsQuiz(id: number) {
    const ev = await this.repo.findOne({
      where: {
        id,
      },
    });
    ev.isQuiz = true;
    return this.repo.save(ev);
  }
}
