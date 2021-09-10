import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { handleAsync } from '../common/handleAsync';
import { User } from '../entities/User';


/**
 * @desc I like to have all my middlewares by functionality, again, I like to have structure even if it means writing few lines of code. I think this makes my routes clean and easier to read. All my logics are handle in all my controllers.
 */
export class AuthController {
	/**
	 * @desc checks if user is authenticated
	 */
	static isAuth: RequestHandler = async (req, res, next) => {
		const authHeader = req.headers.authorization;
		const token = authHeader?.split(' ')[1];

		if (!authHeader) throw new Error('Authentication failed');
		if (!token) throw new Error('Authentication failed');

		try {
			const payload: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
			res.locals.userId = payload.userId;

			return next();
		} catch (e) {}

		throw new Error('Authentication failed');
	};

	/**
	 * @desc sign up user
	 */
	static singUp: RequestHandler = async (req, res, next) => {
		const { name, email } = req.body;

		const [, error] = await handleAsync(
			User.create({
				name,
				email,
			}).save()
		);

		if (error) return next(error);

		return next();
	};

	/**
	 * @desc log in user
	 */
	static login: RequestHandler = async (req, res, next) => {};

	/**
	 * @desc deletes user and all their questions, answers, and comments
	 */
	static delete: RequestHandler = async (req, res, next) => {};
}
