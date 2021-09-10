import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './Post';
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

	@OneToMany(() => Post, post => post.creator)
	posts: Promise<Post[]>;

	@OneToMany(() => Answer, answer => answer.creator)
	answers: Promise<Answer[]>;

	@OneToMany(() => Comment, comment => comment.creator)
	comments: Promise<Comment[]>;
}
