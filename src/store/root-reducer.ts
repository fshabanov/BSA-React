import { reducer as authReducer } from './auth/reducer';
import { reducer as tripsReducer } from './trips/reducer';
import { reducer as tripReducer } from './trip/reducer';
import { reducer as bookingsReducer } from './bookings/reducer';
import { reducer as toastr } from 'react-redux-toastr';

export { authReducer, tripsReducer, tripReducer, bookingsReducer, toastr };
