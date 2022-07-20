const DEFAULT_STATUS = 503;
const DEFAULT_MESSAGE = 'Network Error';

class ErrorHelper extends Error {
	status: number;
	constructor({ status = DEFAULT_STATUS, message = DEFAULT_MESSAGE }) {
		super(message);
		this.status = status;
	}
}

export { ErrorHelper };
