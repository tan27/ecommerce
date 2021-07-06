import React from 'react'

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
            fetch('http://localhost:3001/register', {
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
            <div>
                <article className="tc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="name" 
                            name="name"  
                            id="name"
                            onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>

                        <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                            onClick={this.onSubmitRegister} 
                            />
                        </div>
                        <div className="lh-copy mt3">
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
