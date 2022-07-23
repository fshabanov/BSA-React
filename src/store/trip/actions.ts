import { TripsActionTypes } from '../trips/common';
import { createAction } from '@reduxjs/toolkit';

export const getTripByIdAction = createAction(
	TripsActionTypes.GET_TRIP_BY_ID,
	(id: string) => ({
		payload: id,
	})
);
