import React, { useEffect } from 'react';
import { IBooking, IState } from 'src/@types';
import 'src/assets/css/booking.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { deleteBooking, getAllBookings } from 'src/store/bookings/actions';

const Bookings: React.FC = () => {
	const { bookings } = useSelector((state: IState) => state.bookings);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getAllBookings());
	}, [dispatch]);

	const handleDelete = (id: string) => {
		dispatch(deleteBooking(id));
	};

	return (
		<main className='bookings-page'>
			<h1 className='visually-hidden'>Travel App</h1>
			<ul className='bookings__list'>
				{bookings
					// .sort(
					// 	(a, b) =>
					// 		new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
					// )
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
		</main>
	);
};

export default Bookings;
