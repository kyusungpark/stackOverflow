import { createConnection } from 'typeorm';
import { join } from 'path';

export class DB {
	constructor() {
		this.connect();
	}

	async connect(): Promise<void> {
		try {
			await createConnection({
				type: 'postgres',
				url: process.env.PG,
				database: 'stackoverflow',
				entities: [join(__dirname, './entities/*.*')],
				logging: true,
				synchronize: true,
			});

			console.log('connected to DB');
		} catch (e) {
			console.error(e);
		}
	}
}
