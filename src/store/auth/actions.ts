import { IAuthBody } from 'src/@types';
import { IUser } from 'src/@types';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { AuthActionTypes } from './common';

export interface IAuthPayload {
	user: IUser | null;
	token?: string;
}

export const signOut = createAsyncThunk<IAuthPayload, void>(
	AuthActionTypes.SIGN_OUT,
	() => {
		localStorage.removeItem('token');
		return {
			user: null,
		};
	}
);

export const getUser = createAction(AuthActionTypes.LOAD_CURRENT_USER);

export const signInAction = createAction(
	AuthActionTypes.SIGN_IN,
	(signInData: IAuthBody) => ({
		payload: signInData,
	})
);

export const signUpAction = createAction(
	AuthActionTypes.SIGN_UP,
	(signUpData: IAuthBody) => ({
		payload: signUpData,
	})
);
