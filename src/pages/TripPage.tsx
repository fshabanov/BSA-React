import React from 'react';
import useRouter from 'src/hooks/useRouter';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'src/components/Modal';
import { IState, ITrip } from 'src/@types';
import 'src/assets/css/tripPage.css';
import NewTrip from 'src/components/trip/NewTrip';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { tripActions } from 'src/store/actions';
import Loading from 'src/components/Loading';

const TripPage: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	const { query } = useRouter();

	const { trip, isLoading } = useSelector((state: IState) => state.trip);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		try {
			dispatch(tripActions.getTripById(query.id as string));
		} catch (err) {
			alert(err);
			console.log(err);
		}
	}, [dispatch, query.id]);

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	return (
		<>
			{isLoading || !trip ? (
				<Loading />
			) : (
				<>
					<main className='trip-page'>
						<h1 className='visually-hidden'>Travel App</h1>
						<div className='trip'>
							{/* disabled and didn't change alt, because tests may depend on it */}
							{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
							<img src={trip.image} className='trip__img' alt='trip image' />
							<div className='trip__content'>
								<div className='trip-info'>
									<h3 className='trip-info__title'>{trip.title}</h3>
									<div className='trip-info__content'>
										<span className='trip-info__duration'>
											<strong>{trip.duration}</strong> days
										</span>
										<span className='trip-info__level'>{trip.level}</span>
									</div>
								</div>
								<div className='trip__description'>{trip.description}</div>
								<div className='trip-price'>
									<span>Price</span>
									<strong className='trip-price__value'>{trip.price} $</strong>
								</div>
								<button
									className='trip__button button'
									onClick={handleOpenModal}
								>
									Book a trip
								</button>
							</div>
						</div>
					</main>
					{showModal && (
						<Modal>
							<NewTrip trip={trip as ITrip} onClose={handleCloseModal} />
						</Modal>
					)}
				</>
			)}
		</>
	);
};

export default TripPage;
