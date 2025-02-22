import { ChapterEntity } from 'src/chapter/chapter.entity';
import { ExcerciseVariableEntity } from 'src/exercise-variable/exercise_variable.entity';
export declare class ExcerciseEntity {
    id: number;
    userId: number;
    chapterId: number;
    success: boolean;
    chapter: ChapterEntity;
    excercise_variables: ExcerciseVariableEntity[];
}
