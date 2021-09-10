import { Application, Request, Response } from 'express';
import { RouteConfig } from '../common/route.config';
import { AuthController } from '../user/auth.controller';
import { PostController } from './post.controller';

/**
 * @desc I like to have my routes just simply handle routes. I will have all my logic inside in my controllers and have just import the middlewares.
 */
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
				[
					AuthController.isAuth,
					PostController.listQuestions,
					PostController.listAnswers,
				],
				(req: Request, res: Response) => {
					const { answer, comment, question } = res.locals;
					res.status(200).json({ question, answer, comment });
				}
			);

		/**
		 * @GET     api/postdetails
		 * @desc    show all answers and comments for a post
		 */
		this.app
			.route('/api/postdetails')
			.get([PostController.listAnswers], (req: Request, res: Response) => {
				res.status(200).json();
			});

		return this.app;
	}
}
