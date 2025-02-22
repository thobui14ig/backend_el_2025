import { VariableService } from 'src/variable/variable.service';
import { DataSource, Repository } from 'typeorm';
import { CreateExcerciseDto } from './dto/create-excercise.dto';
import { ExcerciseEntity } from './excercise.entity';
import { ExerciseVariableService } from 'src/exercise-variable/exercise_variable.service';
import { ExcerciseVariableEntity } from 'src/exercise-variable/exercise_variable.entity';
export declare class ExcerciseService {
    private repo;
    private readonly variableService;
    private readonly exerciseVariableService;
    private connection;
    constructor(repo: Repository<ExcerciseEntity>, variableService: VariableService, exerciseVariableService: ExerciseVariableService, connection: DataSource);
    create(createExcerciseDto: CreateExcerciseDto): string;
    findAll(): string;
    findOne(id: number): Promise<ExcerciseEntity>;
    getExercise(id: number): Promise<ExcerciseEntity>;
    update(updateExcerciseDto: any): Promise<any>;
    remove(id: number): string;
    getAllExcerciseVariables(chapterId: number, userId: number): Promise<ExcerciseEntity>;
    checkExitExcerciseOfUser(chapterId: number, userId: number): Promise<ExcerciseVariableEntity | ExcerciseVariableEntity[]>;
    removeExcerciseWithChapterId(userId: number, chapterId: number): Promise<import("typeorm").DeleteResult>;
    findByUserAndChapter(userId: number, chapterId: number): Promise<ExcerciseEntity>;
    checkUserSuccessExercise(id: number, userId: number): Promise<ExcerciseEntity>;
    getExerciseRandom(userId: number): Promise<any>;
    getExerciseRandomWithTopic(userId: number, topicId: number): Promise<any>;
}
