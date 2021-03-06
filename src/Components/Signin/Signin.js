import React from 'react';


const Signin = ({ onRouteChange }) => {
	return (
		<article className=" shadow-5 br3 ba b--black-10 mv4 w-100 1-50-m w-25-1 mw6 center">
				<main className="pa4 black-80">
				<div className="measure light-green">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f1 center fw6 ph0 mh0">SignIn</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
						<input className="b pa2 white input-reset ba bg-transparent hover-bg-black hover-w-100" type="password" name="password"  id="password" />
					</div>
					  </fieldset>
					<div className="center">
				  <input
					onClick={() => onRouteChange('home')} 
					className="b ph3 pv2 input-reset ba b--black bg-transparent grow  pointer f dib" 
					type="submit" 
					value="Sign in"
					/>
				</div>
				<div className="lh-copy  center mt3">
						<p onClick={() => onRouteChange('Register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow  pointer f dib"
						>Register</p>
					</div>
				</div>
				</main> 
		</article>
	);
}

export default Signin;