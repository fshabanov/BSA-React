import { Api } from './api/api';
import { Auth } from './auth/auth';
import { Bookings } from './bookings/bookings';
import { Notification } from './notifications/notifications';
import { Trips } from './trips/trips';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;

const api = new Api();

const serviceData = {
	baseUrl: REACT_APP_API_URL,
	http: api,
};

const auth = new Auth(serviceData);
const trips = new Trips(serviceData);
const bookings = new Bookings(serviceData);
const notifications = new Notification();

export { api, auth, trips, bookings, notifications };
