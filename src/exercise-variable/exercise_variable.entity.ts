import { ExcerciseEntity } from 'src/excercise/excercise.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'excercise_variable' })
export class ExcerciseVariableEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  exerciseId?: number;

  @Column()
  variableId?: number;

  @Column({ default: 0 })
  count?: number;

  @Column({ default: false })
  isQuiz?: boolean;

  @ManyToOne(() => ExcerciseEntity, (chapter) => chapter.excercise_variables, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'exerciseId' })
  exercise?: ExcerciseEntity;

  // @OneToOne(() => VariableEntity)
  // @JoinColumn({ name: 'variableId' })
  // variable?: VariableEntity;
}
