import { IBookingBody } from 'src/@types';
import { BookingActionTypes } from './common';
import { createAction } from '@reduxjs/toolkit';

export const getAllBookingsAction = createAction(BookingActionTypes.GET_ALL);

export const newBookingAction = createAction(
	BookingActionTypes.CREATE,
	(booking: IBookingBody) => ({
		payload: booking,
	})
);

export const deleteBookingAction = createAction(
	BookingActionTypes.DELETE,
	(id: string) => ({
		payload: id,
	})
);
