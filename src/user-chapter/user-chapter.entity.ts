import { ChapterEntity } from 'src/chapter/chapter.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_chapter' })
export class UserChapterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  chapterId: number;

  @Column({ default: false })
  active: boolean;

  @Column({ default: false })
  success: boolean;

  @ManyToOne(() => ChapterEntity, (chapter) => chapter.userChapters)
  @JoinColumn({ name: 'chapterId' })
  chapter: ChapterEntity;
}
