// @ts-nocheck
import { signUpAction } from './actions';
import { takeEvery } from 'redux-saga/effects';

import { getUser, signInAction } from './actions';
import { ActionStatus } from './common';
import { all, call, put } from 'redux-saga/effects';
import {
	auth as authService,
	notifications as notificationService,
} from 'src/service/services';

function* getAuthState() {
	try {
		const user = yield call([authService, authService.getCurrentUser]);
		yield put({
			type: `${getUser.type}/${ActionStatus.FULFILLED}`,
			payload: user,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			[err.status, err.message]
		);
		yield put({
			type: `${getUser.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* signIn({ payload }) {
	try {
		const { email, password } = payload;
		const { user, token } = yield call([authService, authService.signIn], {
			email,
			password,
		});
		localStorage.setItem('token', token);
		yield put({
			type: `${signInAction.type}/${ActionStatus.FULFILLED}`,
			payload: user,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			[err.status, err.message]
		);
		yield put({
			type: `${signInAction.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* signUp({ payload }) {
	try {
		const { fullName, email, password } = payload;
		const { user, token } = yield call([authService, authService.signUp], {
			fullName,
			email,
			password,
		});
		localStorage.setItem('token', token);
		yield put({
			type: `${signUpAction.type}/${ActionStatus.FULFILLED}`,
			payload: user,
		});
	} catch (err) {
		yield call(
			[notificationService, notificationService.error],
			[err.status, err.message]
		);
		yield put({
			type: `${signUpAction.type}/${ActionStatus.REJECTED}`,
		});
	}
}

function* watchAuthState() {
	yield takeEvery(getUser.type, getAuthState);
}

function* watchSignIn() {
	yield takeEvery(signInAction.type, signIn);
}

function* watchSignUp() {
	yield takeEvery(signUpAction.type, signUp);
}

function* auth() {
	yield all([watchAuthState(), watchSignIn(), watchSignUp()]);
}

export { auth };
