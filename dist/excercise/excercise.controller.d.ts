import { Request } from 'express';
import { CreateExcerciseDto } from './dto/create-excercise.dto';
import { ExcerciseService } from './excercise.service';
export declare class ExcerciseController {
    private readonly excerciseService;
    constructor(excerciseService: ExcerciseService);
    getExerciseRandom(req: Request): Promise<any>;
    getExerciseRandomWithTopic(req: Request, topicId: number): Promise<any>;
    create(createExcerciseDto: CreateExcerciseDto): string;
    findAll(): string;
    findOne(id: string): Promise<import("./excercise.entity").ExcerciseEntity>;
    checkExitexcerciseOfUser(chapterId: number, req: Request): Promise<import("../exercise-variable/exercise_variable.entity").ExcerciseVariableEntity | import("../exercise-variable/exercise_variable.entity").ExcerciseVariableEntity[]>;
    deleteExcerciseWithChapterId(chapterId: number, req: Request): Promise<import("typeorm").DeleteResult>;
    checkUserSuccessExercise(id: string, req: Request): Promise<import("./excercise.entity").ExcerciseEntity>;
}
