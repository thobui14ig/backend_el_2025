import { ChapterEntity } from 'src/chapter/chapter.entity';
export declare class UserChapterEntity {
    id: number;
    userId: number;
    chapterId: number;
    active: boolean;
    success: boolean;
    chapter: ChapterEntity;
}
