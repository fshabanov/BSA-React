import { all } from 'redux-saga/effects';
import { auth } from 'src/store/auth/sagas';

function* rootSaga() {
	yield all([auth()]);
}

export { rootSaga };
