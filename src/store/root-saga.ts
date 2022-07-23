import { all } from 'redux-saga/effects';
import { auth } from 'src/store/auth/sagas';
import { bookings } from 'src/store/bookings/sagas';

function* rootSaga() {
	yield all([auth(), bookings()]);
}

export { rootSaga };
