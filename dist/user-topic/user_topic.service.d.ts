import { TopicService } from 'src/topic/topic.service';
import { Repository } from 'typeorm';
import { UserTopic } from './user_topic.entity';
export declare class UserTopicService {
    private repo;
    private readonly topicService;
    constructor(repo: Repository<UserTopic>, topicService: TopicService);
    create(userId: number): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(topicId: number, userId: number): Promise<void>;
    remove(id: number): string;
    getStatus(userId: number, topicId: number): void;
}
