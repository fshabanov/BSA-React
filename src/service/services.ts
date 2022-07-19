import { Api } from './api/api';
import { Auth } from './auth/auth';
import { Bookings } from './bookings/bookings';
import { Trips } from './trips/trips';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;

const api = new Api();
const auth = new Auth({ baseUrl: REACT_APP_API_URL, http: api });
const trips = new Trips({ baseUrl: REACT_APP_API_URL, http: api });
const bookings = new Bookings({ baseUrl: REACT_APP_API_URL, http: api });

export { api, auth, trips, bookings };
