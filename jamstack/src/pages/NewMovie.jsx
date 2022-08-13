// Libs
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import AddingForm from "../components/AddingForm";
// Data
import { createMovie } from "../features/movies/moviesSlice";
import { createReview } from "../features/reviews/reviewsSlice";

const NewMovie = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const [movie, setMovie] = useState({
		title: "",
		rating: 1,
		description: "",
		createdBy: user.uid,
	});

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate, dispatch]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const { title, createdBy, rating, description } = movie;

		const movieData = {
			title,
			createdBy,
		};
		const newMovie = await dispatch(createMovie(movieData));

		const reviewData = await {
			rating,
			description,
			createdBy,
			movieId: newMovie.payload.id,
		};
		await dispatch(createReview(reviewData));

		await navigate("/movies");

		setMovie({
			title: "",
			rating: 1,
			description: "",
			createdBy: user.uid,
		});
	};

	const onCancel = (e) => {
		e.preventDefault();

		setMovie({
			title: "",
			rating: 1,
			description: "",
			createdBy: user.uid,
		});

		navigate("/movies");
	};

	return (
		<main className="NewMovie container">
			<h2>Submit a Movie and a Review</h2>
			<AddingForm
				includeMovie
				user={user}
				setFormData={setMovie}
				submitForm={onSubmit}
				cancel={onCancel}
			/>
		</main>
	);
};

export default NewMovie;
