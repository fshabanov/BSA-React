import { Auth } from 'src/service/auth/auth';
import { Bookings } from 'src/service/bookings/bookings';
import { Notification } from 'src/service/notifications/notifications';
import { Trips } from 'src/service/trips/trips';
export interface IExtra {
	authService: Auth;
	notificationsService: Notification;
	bookingsService: Bookings;
	tripsService: Trips;
}
