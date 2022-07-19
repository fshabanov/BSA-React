export default interface IBooking extends IBookingBody {
	id: string;
	trip: {
		title: string;
		duration: number;
		price: number;
	};
	totalPrice: number;
	createdAt: string;
}

export interface IBookingBody {
	userId: string;
	tripId: string;
	guests: number;
	date: string;
}
