import { ExcerciseEntity } from 'src/excercise/excercise.entity';
import { TopicEntity } from 'src/topic/topic.entity';
import { UserChapterEntity } from 'src/user-chapter/user-chapter.entity';
import { VariableEntity } from 'src/variable/variable.entity';
export declare class ChapterEntity {
    id: number;
    name: string;
    topicId: number;
    topic: TopicEntity;
    variables: VariableEntity[];
    excercises: ExcerciseEntity[];
    userChapters: UserChapterEntity[];
    userChapter: UserChapterEntity;
}
