import { Api } from '../api/api';
import { ApiPath, HttpMethods } from './../../enums/enums';
class Auth {
	_baseUrl: string;
	_http: Api;
	_basePath: string;
	constructor({ baseUrl, http }: { baseUrl: string; http: Api }) {
		this._baseUrl = baseUrl;
		this._http = http;
		this._basePath = `${ApiPath.AUTH}`;
	}

	getCurrentUser() {
		return this._http.load(this._getUrl(ApiPath.CURRENT_USER), {
			method: HttpMethods.GET,
		});
	}

	signIn({ email, password }: { email: string; password: string }) {
		return this._http.load(this._getUrl(ApiPath.SIGN_IN), {
			method: HttpMethods.POST,
			payload: JSON.stringify({ email, password }),
			contentType: 'application/json',
		});
	}

	signUp({
		fullName,
		email,
		password,
	}: {
		fullName: string;
		email: string;
		password: string;
	}) {
		return this._http.load(this._getUrl(ApiPath.SIGN_UP), {
			method: HttpMethods.POST,
			payload: JSON.stringify({ fullName, email, password }),
			contentType: 'application/json',
		});
	}

	_getUrl(path = '') {
		return `${this._baseUrl}${this._basePath}${path}`;
	}
}

export { Auth };
