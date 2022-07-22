export enum AuthActionTypes {
	LOAD_CURRENT_USER = 'auth/load-current-user',
	SIGN_IN = 'auth/sign-in',
	SIGN_OUT = 'auth/sign-out',
	SIGN_UP = 'auth/sign-up',
}

export enum ActionStatus {
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}
