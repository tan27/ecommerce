import React, { useState } from 'react';
import logo from '../../default1.png';
import './Signin.css';

function Signin( {loadUser, onRouteChange}) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const onSubmitSignIn = (event) => {
		event.preventDefault();
		fetch('http://localhost:3001/signin', {
		  method: 'post',
		  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
		  body: JSON.stringify({
			email: email,
			password: password,
		  }),
		})
		  .then((response) => response.json())
		  .then((user) => {
			if (user._id) {
			  loadUser(user);
			  onRouteChange('home');
			}
		  });
	  };

	return (
		<div className='tc'>
			<article className='mv6 mw5 center shadow-5 bg-white br4 w-50'>
				<main className='pa4'>
					<form>
						<fieldset
							id='sign_up'
							className='ba b--transparent'>
							<legend className='f4 fw6 pt4'>Sign-In</legend>
							<img className='logo' src={logo} alt='Logo'/>
							<div>
								<input
									className='forms mb3 input-reset'
									type='email'
									name='email-address'
									id='email-address'
									placeholder='Email'
									onChange={onEmailChange}
								/>
							</div>
							<div className='mv3'>
								<input
									className='forms input-reset'
									type='password'
									name='password'
									id='password'
									placeholder='Password'
									onChange={onPasswordChange}
								/>
							</div>
						</fieldset>

						<div className=''>
							<input
								className='sign grow pointer'
								type='submit'
								value='Sign in'
								onClick={onSubmitSignIn}
							/>
						</div>
						<div className='lh-copy mt5'>
						<p className='f7 pt3'>Don't have an account?</p>
							<p
								onClick={() => onRouteChange('register')}
								className='f6 link pointer dim black db pb3'>
								Register
							</p>
						</div>
					</form>
				</main>
				{/* <img className='mw4' src={logo} alt='Logo'/> */}
			</article>
		</div>
	);
}



export default Signin;
