import { ITripState } from 'src/@types';
import { getTripByIdAction } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { ActionStatus } from '../auth/common';

const initialState: ITripState = {
	trip: null,
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getTripByIdAction.type, (state) => {
		state.isLoading = true;
	});

	builder.addCase(
		`${getTripByIdAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.trip = payload;
			state.isLoading = false;
		}
	);
	builder.addCase(
		`${getTripByIdAction.type}/${ActionStatus.REJECTED}`,
		(state) => {
			state.trip = null;
			state.isLoading = false;
		}
	);
});
