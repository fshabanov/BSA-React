import { configureStore } from '@reduxjs/toolkit';
import { auth as authService } from 'src/service/services';
import { authReducer } from './root-reducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			thunk: {
				extraArgument: {
					authService,
				},
			},
		});
	},
});

export type AppDispatch = typeof store.dispatch;
