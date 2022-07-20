import { signOut } from './../auth/actions';
import { TripsActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTrips = createAsyncThunk(
	TripsActionTypes.GET_ALL_TRIPS,
	async (
		_args,
		{
			extra,
			rejectWithValue,
			dispatch,
		}: { extra: any; rejectWithValue: any; dispatch: any }
	) => {
		try {
			return {
				trips: await extra.tripsService.getAllTrips(),
			};
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);

			return rejectWithValue(err.message);
		}
	}
);
