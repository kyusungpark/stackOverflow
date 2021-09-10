import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity('post')
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	question: string;

	@Column()
	creatorId: number;

	@CreateDateColumn()
	created_at: Date;

	@ManyToOne(() => User, user => user.posts)
	@JoinColumn({ name: 'posts_creatorId' })
	creator: Promise<User>;
}
