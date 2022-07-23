import { all } from 'redux-saga/effects';
import { auth } from 'src/store/auth/sagas';
import { bookings } from 'src/store/bookings/sagas';
import { trip } from 'src/store/trip/sagas';
import { trips } from 'src/store/trips/sagas';

function* rootSaga() {
	yield all([auth(), bookings(), trip(), trips()]);
}

export { rootSaga };
