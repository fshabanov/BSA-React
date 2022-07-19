import { deleteBooking, getAllBookings, newBooking } from './actions';
import { IBooking } from 'src/@types';
import { createReducer } from '@reduxjs/toolkit';

const initialState: { bookings: IBooking[] } = {
	bookings: [],
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllBookings.fulfilled, (state, { payload }) => {
		state.bookings = payload.bookings;
	});
	builder.addCase(newBooking.fulfilled, (state, { payload }) => {
		state.bookings.push(payload.booking);
	});
	builder.addCase(deleteBooking.fulfilled, (state, { payload }) => {
		state.bookings = state.bookings.filter((booking) => booking.id !== payload);
	});
});
