import { Application, Request, Response } from 'express';
import { RouteConfig } from '../common/route.config';
import { AuthController } from './auth.controller';


/**
 * @desc I like to have my routes just simply handle routes. I will have all my logic inside in my controllers and have just import the middlewares.
 */
export class AuthRoutes extends RouteConfig {
	constructor(app: Application) {
		super(app, 'AuthRoutes');
	}

	routes() {
		/**
		 * @POST    api/signup
		 * @desc    sign up user
		 */
		this.app
			.route('/api/signup')
			.post([AuthController.singUp], (req: Request, res: Response) => {
				res.status(200).json('successful signup');
			});

		/**
		 * @POST    api/login
		 * @desc    login user
		 */
		this.app
			.route('/api/login')
			.post([AuthController.login], (req: Request, res: Response) => {
				res.status(200).json('successful login');
			});

		/**
		 * @POST    api/delete
		 * @desc    delete user
		 */
		this.app
			.route('/api/delete')
			.post(
				[AuthController.isAuth, AuthController.delete],
				(req: Request, res: Response) => {
					res.status(200).json('user deleted');
				}
			);

		return this.app;
	}
}
