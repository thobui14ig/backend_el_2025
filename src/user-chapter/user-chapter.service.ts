import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserChapterEntity } from './user-chapter.entity';
import { ChapterService } from 'src/chapter/chapter.service';
import { ExcerciseService } from 'src/excercise/excercise.service';

@Injectable()
export class UserChapterService {
  constructor(
    @InjectRepository(UserChapterEntity)
    private repo: Repository<UserChapterEntity>,
    @Inject(forwardRef(() => ChapterService))
    private readonly chapterService: ChapterService,
    @Inject(forwardRef(() => ExcerciseService))
    private readonly excerciseService: ExcerciseService,
  ) {}

  async create(topicId: number, userId: number) {
    const chapters = await this.chapterService.findByTopicId(topicId);
    for (const [index, chapter] of chapters.entries()) {
      const { id } = chapter;
      let active = false;
      if (index === 0) {
        active = true;
      }

      const isExit = await this.repo.findOne({
        where: {
          userId,
          chapterId: id,
        },
      });
      if (!isExit) {
        const userChapter = {
          userId,
          chapterId: id,
          active,
        };
        await this.repo.save(userChapter);
      }
    }
  }

  async update(chapterId: number, nextId: number, userId: number) {
    const USER_CHAPTER = await this.repo.findOne({
      where: {
        userId,
        chapterId,
      },
    });

    const EXCERCISE = await this.excerciseService.findByUserAndChapter(
      userId,
      chapterId,
    );

    const [userchapter, excercise] = await Promise.all([
      USER_CHAPTER,
      EXCERCISE,
    ]);

    userchapter.success = true;
    excercise.success = true;
    await Promise.all([
      this.repo.save(userchapter),
      this.excerciseService.update(excercise),
    ]);

    if (nextId) {
      const nextChapter = await this.repo.findOne({
        where: {
          userId,
          chapterId: nextId,
        },
      });
      nextChapter.active = true;
      await this.repo.save(nextChapter);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} userChapter`;
  }

  updateSuccess(userId: number, chapterId: number) {
    return this.repo
      .createQueryBuilder()
      .update()
      .set({ success: false })
      .where('chapterId = :chapterId', { chapterId })
      .andWhere('userId = :userId', { userId })
      .execute();
  }
}
