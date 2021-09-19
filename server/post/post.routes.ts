import { Application, Request, Response } from 'express';

import { RouteConfig } from '../common/route.config';
import { AuthController } from '../user/auth.controller';
import { PostController } from './post.controller';

export class PostRoutes extends RouteConfig {
	constructor(app: Application) {
		super(app, 'PostRoutes');
	}

	routes() {
		/**
		 * @GET     api/lists
		 * @desc    show questions and answers for a specific user
		 */
		this.app.route('/api/lists').get(
			[
				// AuthController.isAuth,
				PostController.listQuestions,
				PostController.listAnswers,
			],
			(req: Request, res: Response) => {
				const { answers, comments, questions } = res.locals;
				res.status(200).json({ questions, answers, comments });
			}
		);

		/**
		 * @GET     api/question/:questionId
		 * @desc    show all answers and comments for a post
		 */
		this.app
			.route('/api/question/:questionId')
			.get(
				[PostController.getQuestionAnswers, PostController.getQuestionComments],
				(req: Request, res: Response) => {
					const { answers, comments } = res.locals;
					res.status(200).json({ answers, comments });
				}
			);

		/**
		 * @POST    api/question/:questionId/answer
		 * @desc    add an answer for a user
		 */
		this.app
			.route('/api/question/:questionId/answer')
			.post([PostController.addAnswer], (req: Request, res: Response) => {
				res.status(200).json('Successfully added an answer');
			});

		/**
		 * @POST    api/question/:questionId/comment
		 * @desc    add a comment for a user
		 */
		this.app
			.route('/api/question/:questionId/comment')
			.post([PostController.addComment], (req: Request, res: Response) => {
				res.status(200).json('Successfully added a comment');
			});

		/**
		 * @POST    api/addquestion
		 * @desc    add a question for a user
		 */
		this.app
			.route('/api/question')
			.post([PostController.addQuestion], (req: Request, res: Response) => {
				res.status(200).json('Successfully added a post');
			});

		return this.app;
	}
}
