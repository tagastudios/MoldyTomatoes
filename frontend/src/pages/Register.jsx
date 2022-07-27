import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		password2: "",
	});

	const { firstName, lastName, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				firstName,
				lastName,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<main className="Register">
			<fieldset>
				<legend>Register Form</legend>
				<form onSubmit={onSubmit} className="Form" action="submit">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							placeholder="Enter your First Name"
							onChange={onChange}
						/>
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							placeholder="Enter your First Name"
							onChange={onChange}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							placeholder="Enter your Email"
							onChange={onChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							placeholder="Enter password"
							onChange={onChange}
						/>
					</div>
					<div>
						<label htmlFor="password2">Confirm Password</label>
						<input
							type="password"
							name="password2"
							id="password2"
							value={password2}
							placeholder="Confirm password"
							onChange={onChange}
						/>
					</div>
					<button type="submit" className="mt-3 btn btn-full btn-alt">
						Register
					</button>
				</form>
			</fieldset>
		</main>
	);
};

export default Register;
