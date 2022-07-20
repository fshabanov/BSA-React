import { IServiceConstructor } from 'src/@types';
import { IUser } from 'src/@types';
import { IAuthBody } from 'src/@types/authBody';
import { Api } from '../api/api';
import { ApiPath, HttpMethods } from 'src/enums/enums';

interface IAuthResponse {
	user: IUser;
	token: string;
}

class Auth {
	_baseUrl: string;
	_http: Api;
	_basePath: string;
	constructor({ baseUrl, http }: IServiceConstructor) {
		this._baseUrl = baseUrl;
		this._http = http;
		this._basePath = `${ApiPath.AUTH}`;
	}

	getCurrentUser(): Promise<IUser> {
		return this._http.load(this._getUrl(ApiPath.CURRENT_USER), {
			method: HttpMethods.GET,
		});
	}

	signIn({ email, password }: IAuthBody): Promise<IAuthResponse> {
		return this._http.load(this._getUrl(ApiPath.SIGN_IN), {
			method: HttpMethods.POST,
			payload: JSON.stringify({ email, password }),
			contentType: 'application/json',
		});
	}

	signUp({ fullName, email, password }: IAuthBody): Promise<IAuthResponse> {
		return this._http.load(this._getUrl(ApiPath.SIGN_UP), {
			method: HttpMethods.POST,
			payload: JSON.stringify({ fullName, email, password }),
			contentType: 'application/json',
		});
	}

	_getUrl(path = ''): string {
		return `${this._baseUrl}${this._basePath}${path}`;
	}
}

export { Auth };
