import { CreateTopicDto } from './dto/create-topic.dto';
import { TopicService } from './topic.service';
import { Request } from 'express';
export declare class TopicController {
    private readonly topicService;
    constructor(topicService: TopicService);
    finished(req: Request): Promise<any>;
    create(createTopicDto: CreateTopicDto): Promise<CreateTopicDto & import("./topic.entity").TopicEntity>;
    findAllDesc(): Promise<import("./topic.entity").TopicEntity[]>;
    findAll(req: Request): Promise<any>;
    getAll(): Promise<import("./topic.entity").TopicEntity[]>;
    findOne(id: string): Promise<import("./topic.entity").TopicEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
