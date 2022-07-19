import { HttpMethods } from 'src/enums/enums';
class Api {
	_token = localStorage.getItem('token');
	load(url: string, options?: any) {
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

	_getHeaders(contentType: string | null) {
		const headers = new Headers();
		headers.append('Authorization', 'Bearer ' + this._token);
		if (contentType) {
			headers.append('Content-Type', contentType);
		}
		return headers;
	}

	_checkStatus(response: Response) {
		const { ok: isOk, status } = response;

		if (!isOk) {
			throw new Error(`${status}`);
		}

		if (status === 204) {
			// delete does not return json
			return null;
		}

		return response;
	}

	_parseJSON(response: Response | null) {
		return response?.json();
	}

	_throwError(err: Error) {
		console.log(err);
		throw err;
	}
}

export { Api };
