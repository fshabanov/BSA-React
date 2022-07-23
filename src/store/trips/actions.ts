import { IExtra } from 'src/@types';
import { ITrip } from 'src/@types';
import { TripsActionTypes } from './common';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

interface ITripsReturn {
	trips: ITrip[];
}

// export const getAllTrips = createAsyncThunk<
// 	ITripsReturn,
// 	void,
// 	{
// 		extra: IExtra;
// 	}
// >(TripsActionTypes.GET_ALL_TRIPS, async (_args, { extra, rejectWithValue }) => {
// 	try {
// 		return {
// 			trips: await extra.tripsService.getAllTrips(),
// 		};
// 	} catch (err: any) {
// 		extra.notificationsService.error(`Error ${err.status}`, err.message);

// 		throw rejectWithValue(err.message);
// 	}
// });

export const getAllTripsAction = createAction(TripsActionTypes.GET_ALL_TRIPS);
