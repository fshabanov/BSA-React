import { signOut } from './../auth/actions';
import { TripsActionTypes } from '../trips/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTripById = createAsyncThunk(
	TripsActionTypes.GET_TRIP_BY_ID,
	async (
		id: string,
		{ extra, rejectWithValue }: { extra: any; rejectWithValue: any }
	) => {
		try {
			return {
				trip: await extra.tripsService.getTripById(id),
			};
		} catch (err: any) {
			return rejectWithValue(err.message);
		}
	}
);
