import { IBooking, IBookingBody } from 'src/@types';
import { HttpMethods } from 'src/enums/enums';
import { ApiPath } from 'src/enums/enums';
import { Api } from '../api/api';

class Bookings {
	_baseUrl: string;
	_http: Api;
	_basePath: string;
	constructor({ baseUrl, http }: { baseUrl: string; http: Api }) {
		this._http = http;
		this._baseUrl = baseUrl;
		this._basePath = ApiPath.BOOKINGS;
	}

	getAllBookings(): Promise<IBooking[]> {
		return this._http.load(this._getUrl(), {
			method: HttpMethods.GET,
		});
	}

	newBooking(booking: IBookingBody): Promise<IBooking> {
		return this._http.load(this._getUrl(), {
			method: HttpMethods.POST,
			payload: JSON.stringify(booking),
			contentType: 'application/json',
		});
	}

	deleteBooking(id: string): Promise<void> {
		return this._http.load(this._getUrl(`/${id}`), {
			method: HttpMethods.DELETE,
		});
	}

	_getUrl(path = '') {
		return `${this._baseUrl}${this._basePath}${path}`;
	}
}

export { Bookings };
