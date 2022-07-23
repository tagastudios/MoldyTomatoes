const Register = () => {
	return (
		<main className="Register">
			<fieldset>
				<legend>Register Form</legend>
				<form className="Form" action="submit">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" id="lastName" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div>
						<label htmlFor="rePassword">Confirm Password</label>
						<input type="rePassword" name="password" id="rePassword" />
					</div>
					<button className="mt-3 btn btn-full btn-alt">Register</button>
				</form>
			</fieldset>
		</main>
	);
};

export default Register;
