const Login = () => {
	return (
		<main className="Login">
			<fieldset>
				<legend>Login Form</legend>
				<form className="Form" action="submit">
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<button className="mt-3 btn btn-full btn-alt">Login</button>
				</form>
			</fieldset>
		</main>
	);
};

export default Login;
