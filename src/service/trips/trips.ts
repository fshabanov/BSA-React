import { ITrip, IServiceConstructor } from 'src/@types';
import { ApiPath, HttpMethods } from 'src/enums/enums';
import { Api } from '../api/api';

class Trips {
	_http: Api;
	_baseUrl: string;
	_basePath: ApiPath;
	constructor({ baseUrl, http }: IServiceConstructor) {
		this._http = http;
		this._baseUrl = baseUrl;
		this._basePath = ApiPath.TRIPS;
	}

	getAllTrips(): Promise<ITrip[]> {
		return this._http.load(this._getUrl(), {
			method: HttpMethods.GET,
		});
	}

	getTripById(id: string): Promise<ITrip> {
		return this._http.load(this._getUrl(`/${id}`), {
			method: HttpMethods.GET,
		});
	}

	_getUrl(path = ''): string {
		return `${this._baseUrl}${this._basePath}${path}`;
	}
}

export { Trips };
