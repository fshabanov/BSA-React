// @ts-nocheck
import { put, all, call, takeLeading } from 'redux-saga/effects';

import {
	trips as tripsService,
	notifications as notificationService,
} from 'src/service/services';
import { ActionStatus } from '../auth/common';
import { getTripByIdAction } from './actions';

function* getTripById({ payload }) {
	try {
		const trip = yield call([tripsService, tripsService.getTripById], payload);
		yield put({
			type: `${getTripByIdAction.type}/${ActionStatus.FULFILLED}`,
			payload: trip,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			(err.status, err.message)
		);
		yield put({
			type: `${getTripByIdAction.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* watchGetTripById() {
	yield takeLeading(getTripByIdAction.type, getTripById);
}

function* trip() {
	yield all([watchGetTripById()]);
}

export { trip };
