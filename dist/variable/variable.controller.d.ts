import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { VariableService } from './variable.service';
import { Request } from 'express';
export declare class VariableController {
    private readonly variableService;
    constructor(variableService: VariableService);
    getTotalLearnedWords(req: Request): Promise<any>;
    create(createVariableDto: CreateVariableDto): Promise<CreateVariableDto & import("./variable.entity").VariableEntity>;
    findAll(): Promise<import("./variable.entity").VariableEntity[]>;
    findOne(id: string): Promise<import("./variable.entity").VariableEntity>;
    update(id: string, updateVariableDto: UpdateVariableDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    totalVariableInChapter(chapterId: number): Promise<any>;
    getFourVariableQuiz(id: string): Promise<import("./variable.entity").VariableEntity[]>;
}
