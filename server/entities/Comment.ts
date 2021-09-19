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

@Entity('comment')
export class Comment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	body: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, user => user.comment)
	@JoinColumn({ name: 'userId' })
	userId: Promise<User>;

	@ManyToOne(() => Question, question => question.comment)
	@JoinColumn({ name: 'questionId' })
	questionId: string;
}
