import { ChapterEntity } from 'src/chapter/chapter.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'variable' })
export class VariableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  vi: string;

  @Column()
  spell: string;

  @Column()
  chapterId: number;

  @Column({ nullable: true })
  fileId: number;

  @Column({ nullable: true, type: 'json' })
  note: string;

  @ManyToOne(() => ChapterEntity, (chapter) => chapter.variables, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  chapter?: ChapterEntity;
}
