import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { VariableEntity } from './variable.entity';
import { CreateVariableDto } from './dto/create-variable.dto';

@Injectable()
export class VariableService {
  constructor(
    @InjectRepository(VariableEntity)
    private repo: Repository<VariableEntity>,
    private connection: DataSource,
  ) {}

  create(dto: CreateVariableDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find({
      relations: {
        chapter: {
          topic: true,
        },
      },
      order: {
        id: 'desc',
      },
    });
  }

  findByChapterId(chapterId: number) {
    return this.repo.find({
      where: {
        chapterId,
      },
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateVariableDto: UpdateVariableDto) {
    return `This action updates a #${id} variable`;
  }

  remove(ids: number | number[]) {
    return this.repo.delete(ids);
  }

  removeVariableByChapterIds(chapterIds: number[]) {
    return this.repo
      .createQueryBuilder()
      .delete()
      .where('chapterId IN (:...chapterIds)', { chapterIds })
      .execute();
  }

  countTotalVariableInChapter(chapterId: number) {
    return this.repo
      .createQueryBuilder()
      .select('count(*) as total')
      .where('chapterId = :chapterId', { chapterId })
      .getRawOne();
  }

  async getFourVariableQuiz(id: number) {
    const variables = await this.repo
      .createQueryBuilder()
      .where('id >= :id', { id })
      .limit(4)
      .getMany();

    if (variables.length < 4) {
      return this.repo
        .createQueryBuilder()
        .where('id <= :id', { id })
        .limit(4)
        .orderBy('id', 'DESC')
        .getMany();
    }

    return variables;
  }

  getTotalLearnedWords(userId: number) {
    return this.connection.query(`
      SELECT count(*) as total FROM hoctienganh.user_chapter uc
      left join variable v on v.chapterId=uc.chapterId
      where uc.userId = ${userId} and uc.success=1
    `);
  }
}
