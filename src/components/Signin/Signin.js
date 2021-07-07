import React, { useState } from 'react';
import logo from '../../default.png';

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
		<div>
			<img className='mw5 ml6' src={logo} alt='Logo'/>
			<article className='tc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 bg-light-blue'>
				<main className='pa4 black-80'>
					<form className='measure center'>
						<fieldset
							id='sign_up'
							className='ba b--transparent ph0 mh0'>
							<legend className='f4 fw6 ph0 mh0'>
								Sign In
							</legend>
							<div className='mt3'>
								<label
									className='db fw6 lh-copy f6'
									htmlFor='email-address'>
									Email
								</label>
								<input
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-address'
									onChange={onEmailChange}
								/>
							</div>
							<div className='mv3'>
								<label
									className='db fw6 lh-copy f6'
									htmlFor='password'>
									Password
								</label>
								<input
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
									onChange={onPasswordChange}
								/>
							</div>
						</fieldset>

						<div className=''>
							<input
								className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
								type='submit'
								value='Sign in'
								onClick={onSubmitSignIn}
							/>
						</div>
						<div className='lh-copy mt3'>
							<p
								onClick={() => onRouteChange('register')}
								className='f6 link pointer dim black db'>
								Register
							</p>
						</div>
					</form>
				</main>
			</article>
		</div>
	);
}



export default Signin;
