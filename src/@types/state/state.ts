import { IUser } from 'src/@types';
export interface IState {
	auth: {
		user: IUser | null;
		isLoading: boolean;
	};
}
