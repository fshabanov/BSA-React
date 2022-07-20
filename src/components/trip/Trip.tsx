import React from 'react';
import { Link } from 'react-router-dom';
import { ITrip } from 'src/@types';
import 'src/assets/css/trip.css';

interface Props {
	trip: ITrip;
}

const Trip: React.FC<Props> = ({ trip }) => {
	const { title, price, image, duration, level, id } = trip;
	return (
		<li className='trip-card'>
			{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
			<img src={image} alt='trip image' />
			<div className='trip-card__content'>
				<div className='trip-info'>
					<h3 className='trip-info__title'>{title}</h3>
					<div className='trip-info__content'>
						<span className='trip-info__duration'>
							<strong>{duration}</strong> days
						</span>
						<span className='trip-info__level'>{level}</span>
					</div>
				</div>
				<div className='trip-price'>
					<span>Price</span>
					<strong className='trip-price__value'>{price} $</strong>
				</div>
			</div>
			<Link to={`/trip/${id}`} className='button'>
				Discover a trip
			</Link>
		</li>
	);
};

export default Trip;
