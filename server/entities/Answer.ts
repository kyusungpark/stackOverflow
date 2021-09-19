import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './Question';
import { User } from './User';

@Entity('answer')
export class Answer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	body: string;

	@Column('int', { default: 0 })
	score: number;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, user => user.answer)
	@JoinColumn({ name: 'userId' })
	userId: Promise<User>;

  @ManyToOne(() => Question, question => question.answer)
  @JoinColumn({ name: 'questionId' })
  questionId: string;
}
