require('dotenv-safe').config();
import express, { Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { RouteConfig } from './common/route.config';
import { AuthRoutes } from './user/auth.routes';
import { PostRoutes } from './post/post.routes';
import { DB } from './db';

// initialize DB
new DB();

// initialize configuration
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());

// routes
const routes: Array<RouteConfig> = [];
routes.push(new AuthRoutes(app));
routes.push(new PostRoutes(app));

app.get('/', (req, res) => res.send('Stack Overflow'));

// 404
app.use('*', (req: Request, res: Response) => {
	return res.status(404).send('Invalid Route');
});

// global error handler
app.use(((err, req, res, next) => {
	const defaultErr = {
		status: 500,
		message: 'Error: Middleware error at global error handler',
	};

	const error = Object.assign({}, defaultErr, err);
	return res.status(error.status).json(error.message);
}) as ErrorRequestHandler);

// server
app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);

	routes.forEach((route: RouteConfig) => {
		console.log(`Route configured: ${route.routeName()}`);
	});
});
