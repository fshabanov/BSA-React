import { IFilterState } from './filterState';
import { IBookingsState } from './bookingsState';
import { ITripState } from './tripState';
import { ITripsState } from './tripsState';
import { IAuthState } from './authState';

export interface IState {
	auth: IAuthState;
	trips: ITripsState;
	trip: ITripState;
	bookings: IBookingsState;
	filter: IFilterState;
}
