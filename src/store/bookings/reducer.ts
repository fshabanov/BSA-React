import { IBookingsState } from 'src/@types';
import {
	deleteBookingAction,
	getAllBookingsAction,
	newBookingAction,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { ActionStatus } from '../auth/common';

const initialState: IBookingsState = {
	bookings: [],
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	// builder.addCase(getAllBookings.fulfilled, (state, { payload }) => {
	// 	state.bookings = payload.bookings;
	// 	state.isLoading = false;
	// });
	builder.addCase(getAllBookingsAction.type, (state) => {
		state.isLoading = true;
	});
	builder.addCase(
		`${getAllBookingsAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.bookings = payload;
			state.isLoading = false;
		}
	);
	builder.addCase(
		`${getAllBookingsAction.type}/${ActionStatus.REJECTED}`,
		(state) => {
			state.bookings = [];
			state.isLoading = false;
		}
	);

	builder.addCase(
		`${newBookingAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.bookings.push(payload);
		}
	);

	builder.addCase(
		`${deleteBookingAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.bookings = state.bookings.filter(
				(booking) => booking.id !== payload
			);
			state.isLoading = false;
		}
	);

	// builder.addCase(newBooking.fulfilled, (state, { payload }) => {
	// 	state.bookings.push(payload.booking);
	// });
	// builder.addCase(deleteBooking.fulfilled, (state, { payload }) => {
	// 	state.bookings = state.bookings.filter((booking) => booking.id !== payload);
	// });
	// builder.addCase(getAllBookings.pending, (state) => {
	// 	state.isLoading = true;
	// });
	// builder.addCase(getAllBookings.rejected, (state) => {
	// 	state.isLoading = false;
	// });
});
