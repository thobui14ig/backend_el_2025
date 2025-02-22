import { ExcerciseService } from 'src/excercise/excercise.service';
import { Repository } from 'typeorm';
import { UpdateExerciseVariableDto } from './dto/update-exercise_variable.dto';
import { ExcerciseVariableEntity } from './exercise_variable.entity';
export declare class ExerciseVariableService {
    private repo;
    private readonly exerciseService;
    constructor(repo: Repository<ExcerciseVariableEntity>, exerciseService: ExcerciseService);
    create(createExerciseVariableDto: ExcerciseVariableEntity | ExcerciseVariableEntity[]): Promise<ExcerciseVariableEntity[]> | Promise<ExcerciseVariableEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExerciseVariableDto: UpdateExerciseVariableDto): string;
    remove(id: number): string;
    countVariable(id: number): Promise<ExcerciseVariableEntity>;
    getSumCountAndNumRowsExerciseVariable(exerciseId: number): Promise<any>;
    updateIsQuiz(id: number): Promise<ExcerciseVariableEntity>;
}
