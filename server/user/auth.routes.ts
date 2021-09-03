import { Application, Request, Response } from 'express';
import { RouteConfig } from '../common/route.config';

export class AuthRoutes extends RouteConfig {
	constructor(app: Application) {
		super(app, 'AuthRoutes');
	}

	routes() {
		/**
		 * @POST    api/signup
		 * @desc    sign up user
		 */
		this.app.route('/api/signup').post([], (req: Request, res: Response) => {
			res.status(200).json('successful signup');
		});

		/**
		 * @POST    api/login
		 * @desc    login user
		 */
		this.app.route('/api/login').post([], (req: Request, res: Response) => {
			res.status(200).json('successful login');
		});

		/**
		 * @POST    api/delete
		 * @desc    delete user
		 */

		this.app.route('/api/delete').post([], (req: Request, res: Response) => {
			res.status(200).json('user deleted');
		});

		return this.app;
	}
}
