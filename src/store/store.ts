import { configureStore } from '@reduxjs/toolkit';
import { auth as authService } from 'src/service/services';
import { trips as tripsService } from 'src/service/services';
import { bookings as bookingsService } from 'src/service/services';
import { notifications as notificationsService } from 'src/service/services';
import {
	authReducer,
	bookingsReducer,
	tripReducer,
	tripsReducer,
	toastr,
	filterReducer,
} from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		auth: authReducer,
		trips: tripsReducer,
		trip: tripReducer,
		bookings: bookingsReducer,
		toastr,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			thunk: {
				extraArgument: {
					authService,
					tripsService,
					bookingsService,
					notificationsService,
				},
			},
			serializableCheck: false,
		}).concat(sagaMiddleware);
	},
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
