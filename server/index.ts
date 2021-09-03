import express, { Request, Response, ErrorRequestHandler } from 'express';
import { RouteConfig } from './common/route.config';
import { AuthRoutes } from './user/auth.routes';
import { PostRoutes } from './post/post.routes';

// initialize configuration
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());

// routes
const routes: Array<RouteConfig> = [];
routes.push(new AuthRoutes(app));
routes.push(new PostRoutes(app));

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
	const errorObj = Object.assign({}, defaultErr, err);
	return res.status(errorObj.status).json(errorObj.message);
}) as ErrorRequestHandler);

// server
app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);

	routes.forEach((route: RouteConfig) => {
		console.log(`Route configured: ${route.routeName()}`);
	});
});
