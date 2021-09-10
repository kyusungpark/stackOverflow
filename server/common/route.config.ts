import { Application } from 'express';

/**
 * @desc I prefer to have structure within in the codebase, I know that this comes with a little more typing, but in the end, since there is a more structured code, it is easier to find errors and saves time in the long run.
 */
export abstract class RouteConfig {
	app: Application;
	name: string;

	constructor(app: Application, name: string) {
		this.app = app;
		this.name = name;
		this.routes();
	}

	routeName() {
		return this.name;
	}

	abstract routes(): Application;
}
