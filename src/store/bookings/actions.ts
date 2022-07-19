import { IBookingBody } from 'src/@types';
import { BookingActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBookings = createAsyncThunk(
	BookingActionTypes.GET_ALL,
	async (_args, { extra }: { extra: any }) => {
		return {
			bookings: await extra.bookingsService.getAllBookings(),
		};
	}
);

export const newBooking = createAsyncThunk(
	BookingActionTypes.CREATE,
	async (
		booking: IBookingBody,
		{ extra, rejectWithValue }: { extra: any; rejectWithValue: any }
	) => {
		try {
			return {
				booking: await extra.bookingsService.newBooking(booking),
			};
		} catch (err: any) {
			return rejectWithValue(err.message);
		}
	}
);

export const deleteBooking = createAsyncThunk(
	BookingActionTypes.DELETE,
	async (
		id: string,
		{ extra, rejectWithValue }: { extra: any; rejectWithValue: any }
	) => {
		try {
			await extra.bookingsService.deleteBooking(id);
			return id;
		} catch (err: any) {
			return rejectWithValue(err.message);
		}
	}
);
