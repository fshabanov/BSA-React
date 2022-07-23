import { ActionStatus } from './common';
import { signOut, getUser, signInAction, signUpAction } from './actions';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IAuthState } from 'src/@types';

const initialState: IAuthState = {
	user: null,
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getUser, (state) => {
		state.isLoading = true;
	});
	builder.addCase(
		`${getUser.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.user = payload;
			state.isLoading = false;
		}
	);
	builder.addCase(`${getUser.type}/${ActionStatus.REJECTED}`, (state) => {
		state.user = null;
		state.isLoading = false;
	});

	builder.addCase(signInAction, (state) => {
		state.isLoading = true;
	});

	builder.addCase(
		`${signInAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.user = payload;
			state.isLoading = false;
		}
	);
	builder.addCase(`${signInAction.type}/${ActionStatus.REJECTED}`, (state) => {
		state.user = null;
		state.isLoading = false;
	});

	builder.addCase(signUpAction.type, (state) => {
		state.isLoading = true;
	});

	builder.addCase(
		`${signUpAction.type}/${ActionStatus.FULFILLED}`,
		// @ts-ignore
		(state, { payload }) => {
			state.user = payload;
			state.isLoading = false;
		}
	);

	builder.addCase(`${signUpAction.type}/${ActionStatus.REJECTED}`, (state) => {
		state.isLoading = false;
		state.user = null;
	});

	builder.addMatcher(isAnyOf(signOut.fulfilled), (state, { payload }) => {
		state.user = payload.user;
		state.isLoading = false;
	});
});
