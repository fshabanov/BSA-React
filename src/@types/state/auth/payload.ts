import { IUser } from 'src/@types';
export interface IPayload {
	user: IUser;
	token: string;
}
