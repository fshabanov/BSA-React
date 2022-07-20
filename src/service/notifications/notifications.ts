import { BasicToastrOptions, toastr, ToastrEmitter } from 'react-redux-toastr';

class Notification {
	_instance: ToastrEmitter;
	constructor() {
		this._instance = toastr;
	}

	error(
		title: string,
		message: string,
		option?: BasicToastrOptions | undefined
	): void {
		this._instance.error(title, message, option);
	}

	success(
		title: string,
		message: string,
		option?: BasicToastrOptions | undefined
	): void {
		this._instance.success(title, message, option);
	}

	info(
		title: string,
		message: string,
		option?: BasicToastrOptions | undefined
	): void {
		this._instance.info(title, message, option);
	}
}

export { Notification };
