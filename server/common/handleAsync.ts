export const handleAsync = async <T>(promise: PromiseLike<T>) => {
	try {
		const data = await promise;

		return [data, null];
	} catch (e) {
		const error: any = {
			status: 500,
			message: e,
		};

		console.error(e);
		return [null, error];
	}
};
