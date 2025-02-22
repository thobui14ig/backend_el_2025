import { Repository } from 'typeorm';
import { UserChapterEntity } from './user-chapter.entity';
import { ChapterService } from 'src/chapter/chapter.service';
import { ExcerciseService } from 'src/excercise/excercise.service';
export declare class UserChapterService {
    private repo;
    private readonly chapterService;
    private readonly excerciseService;
    constructor(repo: Repository<UserChapterEntity>, chapterService: ChapterService, excerciseService: ExcerciseService);
    create(topicId: number, userId: number): Promise<void>;
    update(chapterId: number, nextId: number, userId: number): Promise<void>;
    remove(id: number): string;
    updateSuccess(userId: number, chapterId: number): Promise<import("typeorm").UpdateResult>;
}
