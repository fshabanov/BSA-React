import React from "react";
import useRouter from "src/hooks/useRouter";
import trips from "src/data/trips.json";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "src/components/Modal";

interface Props {}

const TripPage: React.FC<Props> = () => {
	const [showModal, setShowModal] = useState(false);

	const { query, navigate } = useRouter();
	const trip = trips.find((trip) => trip.id === query.id);

	useEffect(() => {
		if (!trip) {
			navigate("/");
		}
	}, []);
	if (!trip) return null;
	const { title, price, description, image, duration, level } = trip;

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	return (
		<>
			<main className="trip-page">
				<h1 className="visually-hidden">Travel App</h1>
				<div className="trip">
					<img src={image} className="trip__img" alt="trip image" />
					<div className="trip__content">
						<div className="trip-info">
							<h3 className="trip-info__title">{title}</h3>
							<div className="trip-info__content">
								<span className="trip-info__duration">
									<strong>{duration}</strong> days
								</span>
								<span className="trip-info__level">{level}</span>
							</div>
						</div>
						<div className="trip__description">{description}</div>
						<div className="trip-price">
							<span>Price</span>
							<strong className="trip-price__value">{price} $</strong>
						</div>
						<button className="trip__button button" onClick={handleOpenModal}>
							Book a trip
						</button>
					</div>
				</div>
			</main>
			{showModal && <Modal trip={trip} onClose={handleCloseModal} />}
		</>
	);
};

export default TripPage;
