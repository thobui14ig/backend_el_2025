import { CreateExerciseVariableDto } from './dto/create-exercise_variable.dto';
import { ExerciseVariableService } from './exercise_variable.service';
export declare class ExerciseVariableController {
    private readonly exerciseVariableService;
    constructor(exerciseVariableService: ExerciseVariableService);
    create(createExerciseVariableDto: CreateExerciseVariableDto): void;
    findAll(): string;
    countVariable(id: number): Promise<import("./exercise_variable.entity").ExcerciseVariableEntity>;
    updateIsQuiz(id: number): Promise<import("./exercise_variable.entity").ExcerciseVariableEntity>;
}
