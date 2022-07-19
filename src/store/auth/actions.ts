import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthActionTypes } from './common';

export const getCurrentUser = createAsyncThunk(
	AuthActionTypes.LOAD_CURRENT_USER,
	// To fix any type
	async (_args, { extra }: any) => {
		const data = await extra.authService.getCurrentUser();
		return { user: data };
	}
);

export const signIn = createAsyncThunk(
	AuthActionTypes.SIGN_IN,
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
	AuthActionTypes.SIGN_UP,
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

export const signOut = createAction(AuthActionTypes.SIGN_OUT);
