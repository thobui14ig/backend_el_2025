import { ChapterEntity } from 'src/chapter/chapter.entity';
import { FileEntity } from 'src/file/file.entity';
export declare class TopicEntity {
    id: number;
    name: string;
    fileId: number;
    chapters: ChapterEntity[];
    file: FileEntity;
}
