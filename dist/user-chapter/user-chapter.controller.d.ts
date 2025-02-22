import { Request } from 'express';
import { UserChapterService } from './user-chapter.service';
export declare class UserChapterController {
    private readonly userChapterService;
    constructor(userChapterService: UserChapterService);
    create(topicId: number, req: Request): Promise<void>;
    update(body: {
        chapterId: number;
        nextChapter: number;
    }, req: Request): Promise<void>;
    remove(id: string): string;
}
