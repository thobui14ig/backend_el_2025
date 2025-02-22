import { ExcerciseEntity } from 'src/excercise/excercise.entity';
import { TopicEntity } from 'src/topic/topic.entity';
import { UserChapterEntity } from 'src/user-chapter/user-chapter.entity';
import { VariableEntity } from 'src/variable/variable.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'chapter' })
export class ChapterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  topicId: number;

  @ManyToOne(() => TopicEntity, (topic) => topic.chapters, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  topic: TopicEntity;

  @OneToMany(() => VariableEntity, (variable) => variable.chapter)
  variables: VariableEntity[];

  @OneToMany(() => ExcerciseEntity, (excercise) => excercise.chapter)
  excercises: ExcerciseEntity[];

  @OneToMany(() => UserChapterEntity, (userChapter) => userChapter.chapter)
  userChapters: UserChapterEntity[];

  @OneToOne(() => UserChapterEntity, (userChapter) => userChapter.chapter)
  userChapter: UserChapterEntity;
}
