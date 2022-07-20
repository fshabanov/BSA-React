import { IAuthBody } from 'src/@types';
import { IExtra } from 'src/@types';
import { IUser } from 'src/@types';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthActionTypes } from './common';

interface IAuthPayload {
	user: IUser;
	token?: string;
}

export const getCurrentUser = createAsyncThunk<
	IAuthPayload,
	void,
	{
		extra: IExtra;
	}
>(
	AuthActionTypes.LOAD_CURRENT_USER,
	// To fix any type
	async (_args, { extra }) => {
		const data = await extra.authService.getCurrentUser();
		return { user: data };
	}
);

export const signIn = createAsyncThunk<
	IAuthPayload,
	IAuthBody,
	{
		extra: IExtra;
	}
>(
	AuthActionTypes.SIGN_IN,
	async ({ email, password }, { extra, rejectWithValue }) => {
		try {
			const { user, token } = await extra.authService.signIn({
				email,
				password,
			});
			return {
				user,
				token,
			};
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);
			throw rejectWithValue(err.message);
		}
	}
);

export const signUp = createAsyncThunk<
	IAuthPayload,
	IAuthBody,
	{
		extra: IExtra;
	}
>(
	AuthActionTypes.SIGN_UP,
	// To fix any type
	async ({ fullName, email, password }, { extra, rejectWithValue }) => {
		try {
			const { user, token } = await extra.authService.signUp({
				fullName,
				email,
				password,
			});
			return {
				user,
				token,
			};
		} catch (err: any) {
			extra.notificationsService.error(`Error ${err.status}`, err.message);
			throw rejectWithValue(err.message);
		}
	}
);

export const signOut = createAction(AuthActionTypes.SIGN_OUT);
