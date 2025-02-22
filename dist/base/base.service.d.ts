import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm/common/DeepPartial';
export declare abstract class BaseService<T> {
    private readonly repository;
    constructor(repository: Repository<T>);
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(data: DeepPartial<T>): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T>;
    delete(id: number): Promise<void>;
}
