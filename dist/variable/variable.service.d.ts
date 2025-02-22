import { DataSource, Repository } from 'typeorm';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { VariableEntity } from './variable.entity';
import { CreateVariableDto } from './dto/create-variable.dto';
export declare class VariableService {
    private repo;
    private connection;
    constructor(repo: Repository<VariableEntity>, connection: DataSource);
    create(dto: CreateVariableDto): Promise<CreateVariableDto & VariableEntity>;
    findAll(): Promise<VariableEntity[]>;
    findByChapterId(chapterId: number): Promise<VariableEntity[]>;
    findOne(id: number): Promise<VariableEntity>;
    update(id: number, updateVariableDto: UpdateVariableDto): string;
    remove(ids: number | number[]): Promise<import("typeorm").DeleteResult>;
    removeVariableByChapterIds(chapterIds: number[]): Promise<import("typeorm").DeleteResult>;
    countTotalVariableInChapter(chapterId: number): Promise<any>;
    getFourVariableQuiz(id: number): Promise<VariableEntity[]>;
    getTotalLearnedWords(userId: number): Promise<any>;
}
