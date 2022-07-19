import { HttpMethods } from './../../enums/enums';
class Api {
	_token = localStorage.getItem('token');
	load(url: string, options?: any) {
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

	_getHeaders(contentType: string | null) {
		const headers = new Headers();
		headers.append('Authorization', 'Bearer ' + this._token);
		if (contentType) {
			headers.append('Content-Type', contentType);
		}
		return headers;
	}

	_checkStatus(response: Response) {
		const { ok: isOk, status, statusText } = response;

		if (!isOk) {
			throw new Error(`${status}: ${statusText}`);
		}

		return response;
	}

	_parseJSON(response: Response) {
		return response.json();
	}

	_throwError(err: Error) {
		console.log(err);
		throw err;
	}
}

export { Api };
