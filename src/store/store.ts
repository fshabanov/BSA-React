import { configureStore } from '@reduxjs/toolkit';
import { auth as authService } from 'src/service/services';
import { trips as tripsService } from 'src/service/services';
import { authReducer, tripReducer, tripsReducer } from './root-reducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		trips: tripsReducer,
		trip: tripReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			thunk: {
				extraArgument: {
					authService,
					tripsService,
				},
			},
		});
	},
});

export type AppDispatch = typeof store.dispatch;
