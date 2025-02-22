import { Request } from 'express';
import { UserTopicService } from './user_topic.service';
export declare class UserTopicController {
    private readonly userTopicService;
    constructor(userTopicService: UserTopicService);
    create(req: Request): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(topicId: number, req: Request): Promise<void>;
    remove(id: string): string;
}
