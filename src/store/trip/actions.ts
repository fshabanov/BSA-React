import { IExtra } from 'src/@types/store/extra';
import { ITrip } from 'src/@types';
import { TripsActionTypes } from '../trips/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ITripReturn {
	trip: ITrip;
}

export const getTripById = createAsyncThunk<
	ITripReturn,
	string,
	{
		extra: IExtra;
	}
>(TripsActionTypes.GET_TRIP_BY_ID, async (id, { extra, rejectWithValue }) => {
	try {
		return {
			trip: await extra.tripsService.getTripById(id),
		};
	} catch (err: any) {
		extra.notificationsService.error(`Error ${err.status}`, err.message);

		throw rejectWithValue(err.message);
	}
});
