import { getCurrentUser, signIn, signUp, signOut } from './actions';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IAuthState } from 'src/@types';

const initialState: IAuthState = {
	user: null,
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addMatcher(
		isAnyOf(getCurrentUser.pending, signIn.pending, signUp.pending),
		(state) => {
			state.isLoading = true;
		}
	);
	builder.addMatcher(
		isAnyOf(
			signIn.fulfilled,
			signUp.fulfilled,
			getCurrentUser.fulfilled,
			signOut.fulfilled
		),
		(state, { payload }) => {
			state.user = payload.user;
			state.isLoading = false;
		}
	);
	builder.addMatcher(
		isAnyOf(getCurrentUser.rejected, signIn.rejected, signUp.rejected),
		(state) => {
			state.user = null;
			state.isLoading = false;
		}
	);
});
