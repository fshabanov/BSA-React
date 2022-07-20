import { IExtra } from 'src/@types/store/extra';
import { ITrip } from 'src/@types';
import { TripsActionTypes } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ITripsReturn {
	trips: ITrip[];
}

export const getAllTrips = createAsyncThunk<
	ITripsReturn,
	void,
	{
		extra: IExtra;
	}
>(TripsActionTypes.GET_ALL_TRIPS, async (_args, { extra, rejectWithValue }) => {
	try {
		return {
			trips: await extra.tripsService.getAllTrips(),
		};
	} catch (err: any) {
		extra.notificationsService.error(`Error ${err.status}`, err.message);

		throw rejectWithValue(err.message);
	}
});
