import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './common';

export const getCurrentUser = createAsyncThunk(
	ActionTypes.LOAD_CURRENT_USER,
	// To fix any type
	async (_args, { extra }: any) => {
		const data = await extra.authService.getCurrentUser();
		return { user: data };
	}
);

export const signIn = createAsyncThunk(
	ActionTypes.SIGN_IN,
	// To fix any type
	async (
		{ email, password }: { email: string; password: string },
		{ extra }: any
	) => {
		const { user, token } = await extra.authService.signIn({ email, password });
		return {
			user,
			token,
		};
	}
);

export const signUp = createAsyncThunk(
	ActionTypes.SIGN_UP,
	// To fix any type
	async (
		{
			fullName,
			email,
			password,
		}: { fullName: string; email: string; password: string },
		{ extra }: any
	) => {
		const { user, token } = await extra.authService.signUp({
			fullName,
			email,
			password,
		});
		return {
			user,
			token,
		};
	}
);

export const signOut = createAction(ActionTypes.SIGN_OUT);
