import { RequestHandler } from 'express';

export class PostController {
	/**
	 * @desc lists all questions for a specifit user
	 */
	static listQuestions: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc lists all answers for a specific user
	 */
	static listAnswers: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc creates a post
	 */
	static createPost: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc deletes a post
	 */
	static deletePost: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc adds an answer to a pose
	 */
	static addAnswer: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc adds an comment to a pose
	 */
	static addComment: RequestHandler = async (req, res, next) => {};
}
