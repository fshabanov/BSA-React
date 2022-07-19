import { TripsActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTrips = createAsyncThunk(
	TripsActionTypes.GET_ALL_TRIPS,
	async (_args, { extra }: { extra: any }) => {
		return {
			trips: await extra.tripsService.getAllTrips(),
		};
	}
);
