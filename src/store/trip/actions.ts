import { TripsActionTypes } from '../trips/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTripById = createAsyncThunk(
	TripsActionTypes.GET_TRIP_BY_ID,
	async (id: string, { extra }: { extra: any }) => {
		return {
			trip: await extra.tripsService.getTripById(id),
		};
	}
);
