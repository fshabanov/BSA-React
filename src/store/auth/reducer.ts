import { getCurrentUser, signIn, signUp, signOut } from './actions';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IUser } from 'src/@types';

interface UserState {
	user: IUser | null;
	isLoading: boolean;
}

const initialState: UserState = {
	user: null,
	isLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
		state.user = payload.user;
		state.isLoading = false;
	});
	builder.addCase(signOut, (state) => {
		state.user = null;
		state.isLoading = false;
		localStorage.removeItem('token');
	});
	builder.addMatcher(
		isAnyOf(getCurrentUser.pending, signIn.pending, signUp.pending),
		(state) => {
			state.isLoading = true;
		}
	);
	builder.addMatcher(
		isAnyOf(signIn.fulfilled, signUp.fulfilled),
		(state, { payload }) => {
			localStorage.setItem('token', payload.token || '');
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
