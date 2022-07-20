import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IState, ITrip } from 'src/@types';
import filterDuration from 'src/helpers/filterDuration';
import Trip from './Trip';
import 'src/assets/css/trips.css';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const Trips: React.FC = () => {
	const {
		trips: { trips, isLoading },
		search,
		duration,
		level,
	} = useSelector((state: IState) => ({
		trips: state.trips,
		search: state.filter.search,
		duration: state.filter.duration,
		level: state.filter.level,
	}));

	const [filteredTrips, setFilteredTrips] = useState<ITrip[]>(trips);

	useEffect(() => {
		const filtered = trips.filter((trip) => {
			return (
				trip.title.toLowerCase().includes(search.toLowerCase()) &&
				filterDuration(duration, trip) &&
				trip.level.includes(level)
			);
		});
		setFilteredTrips(filtered);
	}, [search, duration, level, trips]);

	return (
		<section className='trips'>
			<h2 className='visually-hidden'>Trips List</h2>
			{isLoading ? (
				<Loading />
			) : (
				<ul className='trip-list'>
					{filteredTrips.map((trip) => (
						<Trip trip={trip} key={trip.id} />
					))}
				</ul>
			)}
		</section>
	);
};

export default Trips;
