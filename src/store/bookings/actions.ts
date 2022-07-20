import { IExtra } from 'src/@types';
import { IBooking, IBookingBody } from 'src/@types';
import { BookingActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IBookingsReturn {
	bookings: IBooking[];
}

interface IBookingReturn {
	booking: IBooking;
}

export const getAllBookings = createAsyncThunk<
	IBookingsReturn,
	void,
	{
		extra: IExtra;
	}
>(BookingActionTypes.GET_ALL, async (_args, { extra, rejectWithValue }) => {
	try {
		const bookings = await extra.bookingsService.getAllBookings();
		if (!bookings.length)
			extra.notificationsService.info(
				'You have no bookings',
				'You have not booked any trip yet'
			);
		return {
			bookings,
		};
	} catch (err: any) {
		extra.notificationsService.error(`Error ${err.status}`, err.message);
		throw rejectWithValue(err.message);
	}
});

export const newBooking = createAsyncThunk<
	IBookingReturn,
	IBookingBody,
	{
		extra: IExtra;
	}
>(BookingActionTypes.CREATE, async (booking, { extra, rejectWithValue }) => {
	try {
		const newBooking = await extra.bookingsService.newBooking(booking);
		extra.notificationsService.success('Success', 'Booking was created');
		return {
			booking: newBooking,
		};
	} catch (err: any) {
		extra.notificationsService.error(`Error ${err.status}`, err.message);
		throw rejectWithValue(err.message);
	}
});

export const deleteBooking = createAsyncThunk<
	string,
	string,
	{
		extra: IExtra;
	}
>(BookingActionTypes.DELETE, async (id, { extra, rejectWithValue }) => {
	try {
		await extra.bookingsService.deleteBooking(id);
		return id;
	} catch (err: any) {
		extra.notificationsService.error(`Error ${err.status}`, err.message);

		throw rejectWithValue(err.message);
	}
});
