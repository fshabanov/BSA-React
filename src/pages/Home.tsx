import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { tripsActions } from 'src/store/actions';
import { AppDispatch } from 'src/store/store';
import Filter from '../components/Filter';
import Trips from '../components/trip/Trips';

const Home: React.FC = () => {
	// Filter states
	const [search, setSearch] = useState('');
	const [duration, setDuration] = useState('');
	const [level, setLevel] = useState('');

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(tripsActions.getAllTrips());
	}, [dispatch]);

	return (
		<main>
			<h1 className='visually-hidden'>Travel App</h1>
			<Filter
				search={search}
				setSearch={setSearch}
				duration={duration}
				setDuration={setDuration}
				level={level}
				setLevel={setLevel}
			/>
			<Trips search={search} duration={duration} level={level} />
		</main>
	);
};

export default Home;
