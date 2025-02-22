import { ChapterEntity } from 'src/chapter/chapter.entity';
import { FileEntity } from 'src/file/file.entity';
import { UserTopic } from 'src/user-topic/user_topic.entity';

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'topic' })
export class TopicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  fileId: number;

  @OneToMany(() => ChapterEntity, (chapter) => chapter.topic)
  chapters: ChapterEntity[];

  @OneToOne(() => FileEntity, (file) => file.topic)
  @JoinColumn({ name: 'fileId' })
  file: FileEntity;
}
