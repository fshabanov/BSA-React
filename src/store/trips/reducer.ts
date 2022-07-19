import { getAllTrips } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	trips: [],
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllTrips.fulfilled, (state, { payload }) => {
		state.trips = payload.trips;
	});
});
