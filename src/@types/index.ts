import { IServiceConstructor } from './service/serviceConstructor';
import { IAuthBody } from './authBody';
import { IState } from './state/state';
import { IExtra } from './store/index';
import { IUser } from './state/user';
import ITrip from './state/trip';
import { IBookingBody, IBooking } from './state/booking';

export type {
	ITrip,
	IBooking,
	IBookingBody,
	IUser,
	IExtra,
	IState,
	IAuthBody,
	IServiceConstructor,
};
