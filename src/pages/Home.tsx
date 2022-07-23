import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tripsActions } from 'src/store/actions';
import { AppDispatch } from 'src/store/store';
import Filter from '../components/Filter';
import Trips from '../components/trip/Trips';

const Home: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(tripsActions.getAllTripsAction());
	}, [dispatch]);

	return (
		<main>
			<h1 className='visually-hidden'>Travel App</h1>
			<Filter />
			<Trips />
		</main>
	);
};

export default Home;
