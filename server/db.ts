import { createConnection } from 'typeorm';
import { join } from 'path';

import { __prod__ } from './constants';

export class DB {
	constructor() {
		this.connect();
	}

	async connect(): Promise<void> {
		try {
			await createConnection({
				type: 'postgres',
				url: process.env.PG,
				database: 'vstodo',
				entities: [join(__dirname, './entities/*.*')],
				logging: !__prod__,
				synchronize: !__prod__,
			});

			console.log('connected to DB');
		} catch (e) {
			console.error(e);
		}
	}
}
