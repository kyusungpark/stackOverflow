import { RequestHandler } from 'express';

import { Question } from '../entities/Question';
import { Answer } from '../entities/Answer';
import { handleAsync } from '../common/handleAsync';
import { Comment } from '../entities/Comment';

/**
 * @desc I like to have all my middlewares by functionality, again, I like to have structure even if it means writing few lines of code. I think this makes my routes clean and easier to read. All my logics are handle in all my controllers.
 */
export class PostController {
	/**
	 * @desc lists all questions/answers for a specifit user
	 */
	static listQuestions: RequestHandler = async (req, res, next) => {
		const { userId } = req.body;

		const [questions, error] = await handleAsync(
			Question.find({ where: { userId }, order: { createdAt: 'DESC' } })
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
			Answer.find({
				where: { userId },
				order: { createdAt: 'DESC' },
			})
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
			Comment.find({
				where: { userId },
				order: { createdAt: 'DESC' },
			})
		);

		if (error) return next(error);
		res.locals.comments = comments;

		return next();
	};

	/**
	 * @desc adds a question
	 */
	static addQuestion: RequestHandler = async (req, res, next) => {
		const { title, body, userId } = req.body;

		const [, error] = await handleAsync(
			Question.create({
				title,
				body,
				userId,
			}).save()
		);

		if (error) return next(error);

		return next();
	};

	/**
	 * @desc adds an answer to a post
	 */
	static addAnswer: RequestHandler = async (req, res, next) => {
		const { body, userId } = req.body;
		const { questionId } = req.params;

		const [, error] = await handleAsync(
			Answer.create({
				body,
				userId,
				questionId,
			}).save()
		);

		if (error) return next(error);

		return next();
	};

	/**
	 * @desc adds an comment to a post
	 */
	static addComment: RequestHandler = async (req, res, next) => {
		const { body, userId } = req.body;
		const { questionId } = req.params;

		const [, error] = await handleAsync(
			Comment.create({
				body,
				userId,
				questionId,
			}).save()
		);

		if (error) return next(error);

		return next();
	};

	/**
	 * @desc get all answers for a specific post
	 */
	static getQuestionAnswers: RequestHandler = async (req, res, next) => {
		const { questionId } = req.params;

		const [answers, error] = await handleAsync(
			Answer.find({
				where: { questionId },
				order: { createdAt: 'DESC' },
			})
		);

		if (error) return next(error);
		res.locals.answers = answers;

		return next();
	};

	/**
	 * @desc get all comments for a specific post
	 */
	static getQuestionComments: RequestHandler = async (req, res, next) => {
		const { questionId } = req.params;

		const [comments, error] = await handleAsync(
			Comment.find({
				where: { questionId },
				order: { createdAt: 'DESC' },
			})
		);

		if (error) return next(error);
		res.locals.comments = comments;

		return next();
	};
}
