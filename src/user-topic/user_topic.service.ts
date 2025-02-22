import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicService } from 'src/topic/topic.service';
import { Repository } from 'typeorm';
import { UserTopic } from './user_topic.entity';

@Injectable()
export class UserTopicService {
  constructor(
    @InjectRepository(UserTopic)
    private repo: Repository<UserTopic>,
    private readonly topicService: TopicService,
  ) {}

  async create(userId: number) {
    const topics = await this.topicService.getAll();
    for (const [index, topic] of topics.entries()) {
      const { id } = topic;
      let active = false;
      if (index === 0) {
        active = true;
      }

      const isExit = await this.repo.findOne({
        where: {
          userId,
          topicId: id,
        },
      });

      if (!isExit) {
        const userTopic = {
          userId,
          topicId: id,
          active,
        };
        await this.repo.save(userTopic);
      }
    }
  }

  findAll() {
    return `This action returns all userTopic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTopic`;
  }

  async update(topicId: number, userId: number) {
    const topic = await this.repo.findOne({
      where: {
        userId,
        topicId,
      },
    });
    topic.success = true;
    await this.repo.save(topic);

    const nextTopic = await this.topicService.getNextTopic(topicId);
    if (nextTopic) {
      const userTopic = await this.repo.findOne({
        where: {
          userId,
          topicId: nextTopic,
        },
      });

      userTopic.active = true;
      await this.repo.save(userTopic);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} userTopic`;
  }

  getStatus(userId: number, topicId: number) {}
}
