import { IFilterState } from 'src/@types/';
import { setSearch, setDuration, setLevel } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: IFilterState = {
	search: '',
	duration: '',
	level: '',
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(setSearch, (state, { payload }) => {
		state.search = payload;
	});
	builder.addCase(setDuration, (state, { payload }) => {
		state.duration = payload;
	});
	builder.addCase(setLevel, (state, { payload }) => {
		state.level = payload;
	});
});
