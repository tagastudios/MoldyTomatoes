// Libs
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import AddingForm from "../components/AddingForm";
// Data
import { createReview } from "../features/reviews/reviewsSlice";

const NewReview = () => {
	const { movieId } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { movies } = useSelector((state) => state.movies);

	const currentMovie = movies.find((movie) => movie.id === movieId);

	const [review, setReview] = useState({
		description: "",
		rating: 1,
		movieId: movieId,
		createdBy: user.uid,
	});

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate, dispatch]);

	const onSubmit = async (e) => {
		e.preventDefault();

		dispatch(createReview(review));

		setReview({
			description: "",
			rating: 1,
			movieId: movieId,
			createdBy: user.uid,
		});

		navigate("/movies/" + movieId);
	};

	const onCancel = (e) => {
		e.preventDefault();

		setReview({
			description: "",
			rating: 1,
			movieId: movieId,
			createdBy: user.uid,
		});

		navigate("/movies/" + movieId);
	};

	return (
		<main className="NewReview container">
			<h2>Add a Review for {currentMovie?.title}</h2>
			<AddingForm
				user={user}
				setFormData={setReview}
				submitForm={onSubmit}
				cancel={onCancel}
			/>
		</main>
	);
};

export default NewReview;
