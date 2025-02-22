import { PartialType } from '@nestjs/swagger';
import { CreateUserTopicDto } from './create-user_topic.dto';

export class UpdateUserTopicDto extends PartialType(CreateUserTopicDto) {}
