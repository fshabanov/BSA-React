// @ts-nocheck
import { getAllTripsAction } from './actions';
import { call, put, all, takeLeading } from 'redux-saga/effects';

import {
	trips as tripsService,
	notifications as notificationService,
} from 'src/service/services';
import { ActionStatus } from '../auth/common';

function* getAllTrips() {
	try {
		const trips = yield call([tripsService, tripsService.getAllTrips]);
		yield put({
			type: `${getAllTripsAction.type}/${ActionStatus.FULFILLED}`,
			payload: trips,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			(err.status, err.message)
		);
		yield put({
			type: `${getAllTripsAction.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* watchGetAll() {
	yield takeLeading(getAllTripsAction.type, getAllTrips);
}

function* trips() {
	yield all([watchGetAll()]);
}

export { trips };
