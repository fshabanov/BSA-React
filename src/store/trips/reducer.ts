import { ITrip } from 'src/@types';
import { getAllTrips } from './actions';
import { createReducer } from '@reduxjs/toolkit';

interface ITripsState {
	trips: ITrip[];
	isLoading: boolean;
}

const initialState: ITripsState = {
	trips: [],
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllTrips.pending, (state) => {
		state.isLoading = true;
	});
	builder.addCase(getAllTrips.fulfilled, (state, { payload }) => {
		state.trips = payload.trips;
		state.isLoading = false;
	});
	builder.addCase(getAllTrips.rejected, (state, { payload }) => {
		console.log(payload);
		state.isLoading = false;
	});
});
