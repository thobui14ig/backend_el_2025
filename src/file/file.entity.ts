import { TopicEntity } from 'src/topic/topic.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column()
  name: string;

  @OneToOne(() => TopicEntity, (topic) => topic.file) // specify inverse side as a second parameter
  topic: TopicEntity;
}
