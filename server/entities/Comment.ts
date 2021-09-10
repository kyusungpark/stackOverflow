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

@Entity('comment')
export class Comment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	comment: string;

	@Column()
	creatorId: number;

	@CreateDateColumn()
	created_at: Date;

	@ManyToOne(() => User, user => user.comments)
	@JoinColumn({ name: 'comments-creatorId' })
	creator: Promise<User>;
}
