// @ts-nocheck

import { all, call, put, takeLeading } from 'redux-saga/effects';
import {
	bookings as bookingsService,
	notifications as notificationService,
} from 'src/service/services';
import { ActionStatus } from '../auth/common';
import {
	deleteBookingAction,
	getAllBookingsAction,
	newBookingAction,
} from './actions';

function* getAllBookings() {
	try {
		const bookings = yield bookingsService.getAllBookings();
		if (!bookings.length) {
			yield call(
				[notificationService, notificationService.info],
				('You have no bookings', 'You have not booked any trip yet')
			);
		}
		yield put({
			type: `${getAllBookingsAction.type}/${ActionStatus.FULFILLED}`,
			payload: bookings,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			(err.status, err.message)
		);
		yield put({
			type: `${getAllBookingsAction.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* createBooking({ payload }) {
	try {
		const newBooking = yield call(
			[bookingsService, bookingsService.newBooking],
			payload
		);
		yield call(
			[notificationService, notificationService.success],
			'Booking was created successfully'
		);
		yield put({
			type: `${newBookingAction.type}/${ActionStatus.FULFILLED}`,
			payload: newBooking,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			(err.status, err.message)
		);
	}
}

function* deleteBooking({ payload }) {
	try {
		yield call([bookingsService, bookingsService.deleteBooking], payload);
		yield call(
			[notificationService, notificationService.success],
			'Booking was deleted successfully'
		);
		yield put({
			type: `${deleteBookingAction.type}/${ActionStatus.FULFILLED}`,
			payload,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			(err.status, err.message)
		);
	}
}

function* watchGetAll() {
	yield takeLeading(getAllBookingsAction.type, getAllBookings);
}

function* watchCreateNew() {
	yield takeLeading(newBookingAction.type, createBooking);
}

function* watchDelete() {
	yield takeLeading(deleteBookingAction.type, deleteBooking);
}

function* bookings() {
	yield all([watchGetAll(), watchCreateNew(), watchDelete()]);
}

export { bookings };
