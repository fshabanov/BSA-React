import { ApiPath, HttpMethods } from './../../enums/enums';
import { Api } from '../api/api';

class Trips {
	_http: Api;
	_baseUrl: string;
	_basePath: string;
	constructor({ baseUrl, http }: { baseUrl: string; http: Api }) {
		this._http = http;
		this._baseUrl = baseUrl;
		this._basePath = ApiPath.TRIPS;
	}

	getAllTrips() {
		return this._http.load(this._getUrl(), {
			method: HttpMethods.GET,
		});
	}

	_getUrl(path = '') {
		return `${this._baseUrl}${this._basePath}${path}`;
	}
}

export { Trips };
