import { IState } from './state/state';
import { IPayload } from './state/auth/payload';
import { IExtra } from './store/index';
import { IUser } from './state/user';
import ITrip from './trip';
import IBooking, { IBookingBody } from './booking';

export type { ITrip, IBooking, IBookingBody, IUser, IExtra, IPayload, IState };
