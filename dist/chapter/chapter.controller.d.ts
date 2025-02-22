import { Request } from 'express';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
export declare class ChapterController {
    private readonly chapterService;
    constructor(chapterService: ChapterService);
    getVariablesByWithTopic(topicId: string, chapterId: number): Promise<import("./chapter.entity").ChapterEntity>;
    getRandomVariable(id: string, req: Request): Promise<boolean | {
        excerciseVariableId: number;
        variable: import("../variable/variable.entity").VariableEntity;
        total: number;
    }>;
    getRandomQuiz(id: string, req: Request): Promise<false | {
        excerciseVariableId: number;
        variable: import("../variable/variable.entity").VariableEntity;
    }>;
    getChapterInTopic(topicId: string): Promise<any>;
    findAll(): Promise<import("./chapter.entity").ChapterEntity[]>;
    create(createChapterDto: CreateChapterDto): Promise<CreateChapterDto & import("./chapter.entity").ChapterEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getNextChapter(topicId: string, chapterId: string): Promise<number>;
    getChapterWithTopic(topicId: number, req: Request): Promise<import("./chapter.entity").ChapterEntity[]>;
}
