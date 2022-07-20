import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, ITrip } from 'src/@types';
import 'src/assets/css/newTrip.css';
import { newBooking } from 'src/store/bookings/actions';
import { AppDispatch } from 'src/store/store';

interface Props {
	trip: ITrip;
	onClose: () => void;
}

const NewTrip: React.FC<Props> = ({ trip, onClose }) => {
	const [numOfGuests, setNumOfGuests] = useState(1);
	let tomorrowsDate = new Date();
	tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
	tomorrowsDate.setHours(0, 0, 0, 0);
	const [date, setDate] = useState(tomorrowsDate.toISOString().split('T')[0]);
	const { title, price, duration, level, id } = trip;

	const { user } = useSelector((state: IState) => state.auth);

	const dispatch = useDispatch<AppDispatch>();

	const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumOfGuests(+e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(new Date(date));
		console.log(new Date(tomorrowsDate));

		if (
			new Date(date).getTime() >= new Date(tomorrowsDate).getTime() &&
			numOfGuests > 0 &&
			numOfGuests <= 10
		) {
			dispatch(
				newBooking({
					tripId: id,
					date,
					guests: numOfGuests,
					userId: user?.id || '',
				})
			);
			onClose();
		}
	};
	return (
		<div className='trip-popup'>
			<button className='trip-popup__close' onClick={onClose} type='button'>
				×
			</button>
			<form
				className='trip-popup__form'
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<div className='trip-info'>
					<h3 className='trip-info__title'>{title}</h3>
					<div className='trip-info__content'>
						<span className='trip-info__duration'>
							<strong>{duration}</strong> days
						</span>
						<span className='trip-info__level'>{level}</span>
					</div>
				</div>
				<label className='trip-popup__input input'>
					<span className='input__heading'>Date</span>
					<input
						name='date'
						type='date'
						required
						value={date}
						onChange={(e) => setDate(e.target.value)}
						min={tomorrowsDate.toISOString().split('T')[0]}
					/>
				</label>
				<label className='trip-popup__input input'>
					<span className='input__heading'>Number of guests</span>
					<input
						name='guests'
						type='number'
						min={1}
						max={10}
						value={numOfGuests}
						onChange={handleGuestsChange}
						required
					/>
				</label>
				<span className='trip-popup__total'>
					Total:{' '}
					<output className='trip-popup__total-value'>
						{price * numOfGuests}$
					</output>
				</span>
				<button className='button' type='submit'>
					Book a trip
				</button>
			</form>
		</div>
	);
};

export default NewTrip;
