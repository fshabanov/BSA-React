import { ITrip } from 'src/@types';
import { getTripById } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: { trip: ITrip | null; isLoading: boolean } = {
	trip: null,
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getTripById.pending, (state) => {
		state.isLoading = true;
	});
	builder.addCase(getTripById.fulfilled, (state, { payload }) => {
		state.trip = payload.trip;
		state.isLoading = false;
	});
	builder.addCase(getTripById.rejected, (state) => {
		state.isLoading = false;
		state.trip = null;
	});
});
