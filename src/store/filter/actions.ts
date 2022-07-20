import { FilterActionTypes } from './common';
import { createAction } from '@reduxjs/toolkit';

export const setSearch = createAction<string>(FilterActionTypes.SEARCH);

export const setDuration = createAction<string>(FilterActionTypes.DURATION);

export const setLevel = createAction<string>(FilterActionTypes.LEVEL);
