import { ITrip } from 'src/@types';
export interface ITripsState {
	trips: ITrip[];
	isLoading: boolean;
}
