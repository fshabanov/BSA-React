import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import isValidEmail from 'src/helpers/isValidEmail';
import 'src/assets/css/sign.css';
import EmailInput from 'src/components/input/EmailInput';
import PasswordInput from 'src/components/input/PasswordInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { authActions } from 'src/store/actions';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch<AppDispatch>();

	const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isValidEmail(email)) {
			setEmailError('Invalid email');
			return;
		}
		dispatch(authActions.signInAction({ email, password }));
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailError('');
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	return (
		<main className='sign-in-page'>
			<h1 className='visually-hidden'>Travel App</h1>
			<form className='sign-in-form' autoComplete='off' onSubmit={handleSignIn}>
				<h2 className='sign-in-form__title'>Sign In</h2>
				<EmailInput
					value={email}
					onChange={handleEmailChange}
					error={emailError}
				/>
				<PasswordInput value={password} onChange={handlePasswordChange} />
				<button className='button' type='submit'>
					Sign In
				</button>
			</form>
			<span>
				Don't have an account?
				<Link to='/sign-up' className='sign-in-form__link'>
					Sign Up
				</Link>
			</span>
		</main>
	);
};

export default SignIn;
