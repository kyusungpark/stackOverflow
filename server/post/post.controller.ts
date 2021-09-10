import { RequestHandler } from 'express';

import { Post } from '../entities/Post';
import { Answer } from '../entities/Answer';
import { handleAsync } from '../common/handleAsync';
import { Comment } from '../entities/Comment';

/**
 * @desc I like to have all my middlewares by functionality, again, I like to have structure even if it means writing few lines of code. I think this makes my routes clean and easier to read. All my logics are handle in all my controllers.
 */
export class PostController {
	/**
	 * @desc lists all questions for a specifit user
	 */
	static listQuestions: RequestHandler = async (req, res, next) => {
		const { userId } = req.body;

		const [questions, error] = await handleAsync(
			Post.find({ where: { creatorId: userId, order: { id: 'DESC' } } })
		);

		if (error) return next(error);
		res.locals.questions = questions;

		return next();
	};

	/**
	 * @desc lists all answers for a specific user
	 */
	static listAnswers: RequestHandler = async (req, res, next) => {
		const { userId } = req.body;

		const [answers, error] = await handleAsync(
			Answer.find({ where: { creatorId: userId, order: { id: 'DESC' } } })
		);

		if (error) return next(error);
		res.locals.answers = answers;

		return next();
	};

	/**
	 * @desc lists all comments for a specific user
	 */
	static listComments: RequestHandler = async (req, res, next) => {
		const { userId } = req.body;

		const [comments, error] = await handleAsync(
			Comment.find({ where: { creatorId: userId, order: { id: 'DESC' } } })
		);

		if (error) return next(error);
		res.locals.comments = comments;

		return next();
	};

	/**
	 * @desc adds a post
	 */
	static addPost: RequestHandler = async (req, res, next) => {
		const { userId, question } = req.body;

		const [, error] = await handleAsync(
			Post.create({
				question,
				creatorId: userId,
			}).save()
		);

		if (error) return next(error);
		res.locals.question = question;

		return next();
	};

	/**
	 * @desc adds an answer to a post
	 */
	static addAnswer: RequestHandler = async (req, res, next) => {
		const { userId, answer } = req.body;

		const [, error] = await handleAsync(
			Answer.create({
				answer,
				creatorId: userId,
			}).save()
		);

		if (error) return next(error);
		res.locals.answer = answer;

		return next();
	};

	/**
	 * @desc adds an comment to a post
	 */
	static addComment: RequestHandler = async (req, res, next) => {
		const { userId, comment } = req.body;

		const [, error] = await handleAsync(
			Comment.create({
				comment,
				creatorId: userId,
			}).save()
		);

		if (error) return next(error);
		res.locals.comment = comment;

		return next();
	};
}
