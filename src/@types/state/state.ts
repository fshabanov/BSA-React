import { ITrip } from 'src/@types';
import { IUser } from 'src/@types';
export interface IState {
	auth: {
		user: IUser | null;
		isLoading: boolean;
	};
	trips: {
		trips: ITrip[];
		isLoading: boolean;
	};
	trip: {
		trip: ITrip | null;
		isLoading: boolean;
	};
}
