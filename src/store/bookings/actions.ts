import { signOut } from '../auth/actions';
import { IBookingBody } from 'src/@types';
import { BookingActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBookings = createAsyncThunk(
	BookingActionTypes.GET_ALL,
	async (
		_args,
		{ extra, rejectWithValue }: { extra: any; rejectWithValue: any }
	) => {
		try {
			const bookings = await extra.bookingsService.getAllBookings();
			if (!bookings.length)
				extra.notificationsService.info('You have no bookings');
			return {
				bookings,
			};
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);
			throw rejectWithValue(err.message);
		}
	}
);

export const newBooking = createAsyncThunk(
	BookingActionTypes.CREATE,
	async (
		booking: IBookingBody,
		{ extra, rejectWithValue }: { extra: any; rejectWithValue: any }
	) => {
		try {
			const newBooking = await extra.bookingsService.newBooking(booking);
			extra.notificationsService.success('Booking was created');
			return {
				booking: newBooking,
			};
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);
			return rejectWithValue(err.message);
		}
	}
);

export const deleteBooking = createAsyncThunk(
	BookingActionTypes.DELETE,
	async (
		id: string,
		{
			extra,
			rejectWithValue,
		}: { extra: any; rejectWithValue: any; dispatch: any }
	) => {
		try {
			await extra.bookingsService.deleteBooking(id);
			return id;
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);

			return rejectWithValue(err.message);
		}
	}
);
