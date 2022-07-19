import { configureStore } from '@reduxjs/toolkit';
import { auth as authService } from 'src/service/services';
import { trips as tripsService } from 'src/service/services';
import { bookings as bookingsService } from 'src/service/services';
import {
	authReducer,
	bookingsReducer,
	tripReducer,
	tripsReducer,
} from './root-reducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		trips: tripsReducer,
		trip: tripReducer,
		bookings: bookingsReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			thunk: {
				extraArgument: {
					authService,
					tripsService,
					bookingsService,
				},
			},
		});
	},
});

export type AppDispatch = typeof store.dispatch;
