import { Api } from 'src/service/api/api';

export interface IServiceConstructor {
	baseUrl: string;
	http: Api;
}
