import { ExcerciseEntity } from 'src/excercise/excercise.entity';
export declare class ExcerciseVariableEntity {
    id?: number;
    exerciseId?: number;
    variableId?: number;
    count?: number;
    isQuiz?: boolean;
    exercise?: ExcerciseEntity;
}
