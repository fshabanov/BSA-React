import React, { useEffect } from 'react';
import { IBooking, IState } from 'src/@types';
import 'src/assets/css/booking.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { bookingsActions } from 'src/store/actions';
import Loading from 'src/components/Loading';

const Bookings: React.FC = () => {
	const { bookings, isLoading } = useSelector(
		(state: IState) => state.bookings
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(bookingsActions.getAllBookingsAction());
	}, [dispatch]);

	const handleDelete = (id: string) => {
		dispatch(bookingsActions.deleteBookingAction(id));
	};

	return (
		<main className='bookings-page'>
			<h1 className='visually-hidden'>Travel App</h1>
			{isLoading ? (
				<Loading />
			) : (
				<ul className='bookings__list'>
					{/* Bookings is a frozen array, so we have to create a copy of it to sort */}
					{[...bookings]
						.sort(
							(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
						)
						.map((booking: IBooking) => {
							const {
								trip: { title },
								guests,
								date,
								id,
								totalPrice,
							} = booking;
							return (
								<li className='booking' key={id}>
									<h3 className='booking__title'>{title}</h3>
									<span className='booking__guests'>{guests} guests</span>
									<span className='booking__date'>
										{new Date(date).toLocaleDateString()}
									</span>
									<span className='booking__total'>{totalPrice} $</span>
									<button
										className='booking__cancel'
										title='Cancel booking'
										onClick={() => handleDelete(id)}
									>
										<span className='visually-hidden'>Cancel booking</span>×
									</button>
								</li>
							);
						})}
				</ul>
			)}
		</main>
	);
};

export default Bookings;
