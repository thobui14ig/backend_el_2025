import { ExcerciseService } from 'src/excercise/excercise.service';
import { VariableService } from 'src/variable/variable.service';
import { Repository } from 'typeorm';
import { VariableEntity } from './../variable/variable.entity';
import { ChapterEntity } from './chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';
export declare class ChapterService {
    private repo;
    private readonly exerciseService;
    private readonly variableService;
    private randomId;
    constructor(repo: Repository<ChapterEntity>, exerciseService: ExcerciseService, variableService: VariableService);
    create(chapter: CreateChapterDto): Promise<CreateChapterDto & ChapterEntity>;
    findAll(): Promise<ChapterEntity[]>;
    findByTopicId(topicId: number): Promise<ChapterEntity[]>;
    getChapterInTopic(topicId: number): Promise<any>;
    getVariablesByWithTopic(topicId: number, chapterId: number): Promise<ChapterEntity>;
    getRandomVariable(chapterId: number, userId: number): Promise<{
        excerciseVariableId: number;
        variable: VariableEntity;
        total: number;
    } | boolean>;
    getRandomQuiz(chapterId: number, userId: number): Promise<false | {
        excerciseVariableId: number;
        variable: VariableEntity;
    }>;
    remove(ids: number | number[]): Promise<import("typeorm").DeleteResult>;
    getNextChapter(topicId: number, chapterId: number): Promise<number>;
    getChapterWithTopic(topicId: number, userId: number): Promise<ChapterEntity[]>;
}
