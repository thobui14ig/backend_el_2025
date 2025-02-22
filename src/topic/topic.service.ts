import { ChapterService } from './../chapter/chapter.service';
import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { TopicEntity } from './topic.entity';
import { VariableService } from 'src/variable/variable.service';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicEntity)
    private repo: Repository<TopicEntity>,
    private connection: DataSource,
    private readonly chapterService: ChapterService,
    private readonly variableService: VariableService,
  ) {}

  create(createTopicDto: CreateTopicDto) {
    return this.repo.save(createTopicDto);
  }

  findAllDesc() {
    return this.repo.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findAll(userId: number) {
    return this.connection.query(`
      with k1 as(
        SELECT t.*, COUNT(DISTINCT c.id) AS chapterCount, COUNT(a.id) AS variableCount
        FROM topic t 
        
        LEFT JOIN chapter c ON c.topicId=t.id  
        LEFT JOIN variable a ON a.chapterId=c.id 
        
        GROUP BY t.id
        )
        select k1.*, ut.active, ut.success from  k1
        left join user_topic ut on ut.topicId = k1.id and ut.userId = ${userId}
    `);
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  getAll() {
    return this.repo.find();
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  async removeChaptersAndVariables(topicId: number) {
    const chapters = await this.chapterService.findByTopicId(topicId);
    const chapterIds = chapters.map((item) => item.id);
    await this.variableService.removeVariableByChapterIds(chapterIds);
    return this.chapterService.remove(chapterIds);
  }

  async getNextTopic(topicId: number) {
    const data = await this.repo
      .createQueryBuilder()
      .where('id >= :topicId', { topicId })
      .limit(2)
      .getMany();
    if (data.length === 2) {
      return data[1].id;
    }
    return null;
  }

  finished(userId: number) {
    return this.connection.query(`
      select t.id, t.name from user_chapter uc
      join variable v on v.chapterId=uc.chapterId
      join chapter c on c.id=uc.chapterId
      join topic t on t.id=c.topicId
      where userId=${userId}
      and success=1
      group by t.id, t.name
    `);
  }
}
