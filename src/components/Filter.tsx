import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/@types';
import 'src/assets/css/filter.css';
import { filterActions } from 'src/store/actions';
import { AppDispatch } from 'src/store/store';

const Filter: React.FC = () => {
	const { search, duration, level } = useSelector(
		(state: IState) => state.filter
	);

	const dispatch = useDispatch<AppDispatch>();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(filterActions.setSearch(e.target.value));
	};

	const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(filterActions.setDuration(e.target.value));
	};

	const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		dispatch(filterActions.setLevel(e.target.value));
	};

	return (
		<section className='trips-filter'>
			<h2 className='visually-hidden'>Trips filter</h2>
			<form className='trips-filter__form' autoComplete='off'>
				<label className='trips-filter__search input'>
					<span className='visually-hidden'>Search by name</span>
					<input
						id='search-input'
						name='search'
						type='search'
						placeholder='search by title'
						value={search}
						onChange={handleSearchChange}
					/>
				</label>
				<label className='select'>
					<span className='visually-hidden'>Search by duration</span>
					<select
						name='duration'
						value={duration}
						onChange={handleDurationChange}
					>
						<option value=''>duration</option>
						<option value='0_x_5'>&lt; 5 days</option>
						<option value='5_x_10'>&lt; 10 days</option>
						<option value='10_x'>&ge; 10 days</option>
					</select>
				</label>
				<label className='select'>
					<span className='visually-hidden'>Search by level</span>
					<select name='level' value={level} onChange={handleLevelChange}>
						<option value=''>level</option>
						<option value='easy'>easy</option>
						<option value='moderate'>moderate</option>
						<option value='difficult'>difficult</option>
					</select>
				</label>
			</form>
		</section>
	);
};

export default Filter;
