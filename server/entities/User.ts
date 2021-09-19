import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './Question';
import { Answer } from './Answer';
import { Comment } from './Comment';

@Entity('user')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@OneToMany(() => Question, question => question.userId)
	question: Promise<Question[]>;

	@OneToMany(() => Answer, answer => answer.userId)
	answer: Promise<Answer[]>;

	@OneToMany(() => Comment, comment => comment.userId)
	comment: Promise<Comment[]>;
}
