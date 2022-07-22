import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Suspense from './components/Suspense';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/actions';
import { AppDispatch } from './store/store';
import Protected from './components/Protected';
import Loading from './components/Loading';
import Toastr from './components/toastr/toastr';
import { IState } from './@types';

const Footer = React.lazy(() => import('./components/common/Footer'));
const Header = React.lazy(() => import('./components/common/Header'));
const Bookings = React.lazy(() => import('./pages/Bookings'));
const Home = React.lazy(() => import('./pages/Home'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const TripPage = React.lazy(() => import('./pages/TripPage'));

function App() {
	const dispatch = useDispatch<AppDispatch>();
	const { user, isLoading } = useSelector((state: IState) => state.auth);

	useEffect(() => {
		dispatch(authActions.getUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />
			{isLoading ? (
				<Loading />
			) : (
				<Routes>
					<Route
						path='/'
						element={
							<Protected shouldRedirect={!user} redirectTo='/sign-in'>
								<Suspense>
									<Home />
								</Suspense>
							</Protected>
						}
					/>
					<Route
						path='sign-up'
						element={
							<Protected shouldRedirect={!!user} redirectTo='/'>
								<Suspense>
									<SignUp />
								</Suspense>
							</Protected>
						}
					/>
					<Route
						path='sign-in'
						element={
							<Protected shouldRedirect={!!user} redirectTo='/'>
								<Suspense>
									<SignIn />
								</Suspense>
							</Protected>
						}
					/>
					<Route
						path='trip/:id'
						element={
							<Protected shouldRedirect={!user} redirectTo='/sign-in'>
								<Suspense>
									<TripPage />
								</Suspense>
							</Protected>
						}
					/>
					<Route
						path='bookings'
						element={
							<Protected shouldRedirect={!user} redirectTo='/sign-in'>
								<Suspense>
									<Bookings />
								</Suspense>
							</Protected>
						}
					/>
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			)}
			<Footer />
			<Toastr />
		</BrowserRouter>
	);
}

export default App;
