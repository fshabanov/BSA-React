import { Api } from './api/api';
import { Auth } from './auth/auth';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;

const api = new Api();
const auth = new Auth({ baseUrl: REACT_APP_API_URL, http: api });

export { api, auth };
