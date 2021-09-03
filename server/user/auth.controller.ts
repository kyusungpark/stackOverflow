import { RequestHandler } from 'express';

class AuthController {

  /**
   * @desc signUp user
   */
	static singUp: RequestHandler = async (req, res, next) => {};

  /**
   * @desc log in user
   */
	static login: RequestHandler = async (req, res, next) => {};

  /**
   * @desc deletes user and all their questions, answers, and comments
   */
	static delete: RequestHandler = async (req, res, next) => {};
}
