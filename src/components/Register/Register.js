import React from 'react';
import './Register.css';
import logo from '../../default1.png';

class Register extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
            signInName: ''
		};
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value });
	};

    onNameChange = (event) => {
		this.setState({ signInName: event.target.value });
	};

	onSubmitRegister = (event) => {
            event.preventDefault();
            fetch('https://mysterious-crag-10575.herokuapp.com/register', {
              method: 'post',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify({
                name: this.state.signInName,
                email: this.state.signInEmail,
                password: this.state.signInPassword
              }),
            })
              .then((response) => response.json())
              .then((user) => {
                if (user) {
                  this.props.loadUser(user);
                  this.props.onRouteChange('home');
                }
              });
          };

	render() {
		const { onRouteChange } = this.props;
    return (
            <div className="tc">
                <article className="mv6 mw5 center shadow-5 bg-white br4 w-50">
                <main className="main pa4">
                    <form>
                        <fieldset 
                            id="sign_up"
                            className="ba b--transparent">
                        <legend className="f4 fw6 ph0 mh0 pt4">Register</legend>
                        <img className='logo' src={logo} alt='Logo'/>
                        <div>
                            <input 
                            className="forms input-reset" 
                            type="name" 
                            name="name"  
                            id="name"
                            placeholder='Name'
                            onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <input 
                            className="forms input-reset" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            placeholder="Email"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <input 
                            className="forms input-reset" 
                            type="password" 
                            name="password"  
                            id="password"
                            placeholder="Password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>

                        <div className="">
                        <input
                            className='sign grow pointer'
                            type="submit"
                            value="Register"
                            onClick={this.onSubmitRegister} 
                            />
                        </div>
                        <div className="lh-copy mt3">
                        <p className='f7 pt3'>Already have an account?</p>
                        <p 
                        onClick={() => onRouteChange('signin')}
                        className="f6 pointer link dim black db">Sign-In</p>
                        </div>
                    </form>
                </main>
                </article>
            </div>
        )
    }
}

export default Register
