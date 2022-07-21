import { IUser } from './user';
export interface IAuthState {
	user: IUser | null;
	isLoading: boolean;
}
