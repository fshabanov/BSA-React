import { getAllTripsAction } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { ITripsState } from 'src/@types';
import { ActionStatus } from '../auth/common';

const initialState: ITripsState = {
	trips: [],
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllTripsAction, (state) => {
		state.isLoading = true;
	});

	builder.addCase(
		`${getAllTripsAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.trips = payload;
			state.isLoading = false;
		}
	);

	builder.addCase(
		`${getAllTripsAction.type}/${ActionStatus.REJECTED}`,
		(state) => {
			state.isLoading = false;
		}
	);
});
