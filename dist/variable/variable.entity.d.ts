import { ChapterEntity } from 'src/chapter/chapter.entity';
export declare class VariableEntity {
    id: number;
    name: string;
    vi: string;
    spell: string;
    chapterId: number;
    fileId: number;
    note: string;
    chapter?: ChapterEntity;
}
