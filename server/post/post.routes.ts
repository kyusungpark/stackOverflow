import { Application, Request, Response } from 'express';
import { RouteConfig } from '../common/route.config';
import { PostController } from './post.controller';

export class PostRoutes extends RouteConfig {
	constructor(app: Application) {
		super(app, 'AuthRoutes');
	}

	routes() {
		/**
		 * @GET     api/lists
		 * @desc    show questions and answers for a specific user
		 */
		this.app
			.route('/api/lists')
			.get(
				[PostController.listQuestions, PostController.listAnswers],
				(req: Request, res: Response) => {
					res.status(200).json();
				}
			);

		/**
		 * @GET     api/postdetails
		 * @desc    show all answers and comments for a post
		 */
		this.app.route('/api/postdetails').get([], (req: Request, res: Response) => {
			res.status(200).json();
		});

		/**
		 * @POST    api/delete
		 * @desc    delete user
		 */

		this.app.route('/api/delete').post([], (req: Request, res: Response) => {
			res.status(200).json();
		});

		return this.app;
	}
}
