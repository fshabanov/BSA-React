import { HttpMethods } from 'src/enums/enums';
import { ErrorHelper } from 'src/utils/ErrorHelper';

interface Options {
	method: HttpMethods;
	payload?: any; // body can be anything
	contentType?: string;
}

class Api {
	_token = localStorage.getItem('token');
	load(url: string, options: Options) {
		this._token = localStorage.getItem('token');
		const { method = HttpMethods.GET, payload = null, contentType } = options;
		const headers = this._getHeaders(contentType);
		return fetch(url, {
			method,
			headers,
			body: payload,
		})
			.then(this._checkStatus)
			.then(this._parseJSON)
			.catch(this._throwError);
	}

	_getHeaders(contentType: string | undefined): Headers {
		const headers = new Headers();
		headers.append('Authorization', 'Bearer ' + this._token);
		if (contentType) {
			headers.append('Content-Type', contentType);
		}
		return headers;
	}

	async _checkStatus(response: Response): Promise<Response | null | never> {
		if (response.status === 204) return null; // Delete does not return JSON
		if (!response.ok) {
			const parsedException = await response.json().catch(() => ({
				message: response.statusText,
			}));

			throw new ErrorHelper({
				status: response.status,
				message: parsedException?.message,
			});
		}

		return response;
	}

	_parseJSON(response: Response | null) {
		return response?.json();
	}

	_throwError(err: Error): never {
		throw err;
	}
}

export { Api };
