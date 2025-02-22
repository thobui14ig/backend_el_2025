import { ChapterEntity } from 'src/chapter/chapter.entity';
import { ExcerciseVariableEntity } from 'src/exercise-variable/exercise_variable.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'excercise' })
export class ExcerciseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  chapterId: number;

  @Column({ default: false })
  success: boolean;

  @ManyToOne(() => ChapterEntity, (chapter) => chapter.excercises, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'chapterId' })
  chapter: ChapterEntity;

  @OneToMany(
    () => ExcerciseVariableEntity,
    (excercise_variable) => excercise_variable.exercise,
  )
  excercise_variables: ExcerciseVariableEntity[];
}
