import { ITrip } from 'src/@types';
export interface ITripState {
	trip: ITrip | null;
	isLoading: boolean;
}
