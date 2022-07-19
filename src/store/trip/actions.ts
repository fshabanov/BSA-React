import { signOut } from './../auth/actions';
import { TripsActionTypes } from '../trips/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTripById = createAsyncThunk(
	TripsActionTypes.GET_TRIP_BY_ID,
	async (
		id: string,
		{
			extra,
			rejectWithValue,
			dispatch,
		}: { extra: any; rejectWithValue: any; dispatch: any }
	) => {
		try {
			return {
				trip: await extra.tripsService.getTripById(id),
			};
		} catch (err: any) {
			if (err.message === '401') {
				dispatch(signOut());
			}
			return rejectWithValue(err.message);
		}
	}
);
