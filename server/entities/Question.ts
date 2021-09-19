import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from './Answer';
import { Comment } from './Comment';
import { User } from './User';

@Entity('question')
export class Question extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	title: string;

	@Column('text')
	body: string;

	@Column('int', { default: 0 })
	score: number;

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Answer, answer => answer.questionId)
	answer: Promise<Comment[]>;

	@OneToMany(() => Comment, comment => comment.questionId)
	comment: Promise<Comment[]>;

	@ManyToOne(() => User, user => user.question)
	@JoinColumn({ name: 'userId' })
	userId: Promise<User>;
}
