import { IBooking } from './booking';
export interface IBookingsState {
	bookings: IBooking[];
	isLoading: boolean;
}
