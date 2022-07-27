// Libs
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import TableReviews from "../components/TableReviews";
// Data
import {
	deleteReview,
	getReviews,
	reset,
} from "../features/reviews/reviewsSlice";
import { deleteMovie } from "../features/movies/moviesSlice";

const Reviews = () => {
	const { movieId } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { movies } = useSelector((state) => state.movies);
	const { reviews } = useSelector((state) => state.reviews);

	const currentMovie = movies.find((movie) => movie._id === movieId);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}

		dispatch(getReviews(movieId));

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, dispatch]);

	const deleteThisMovie = () => {
		dispatch(deleteMovie(movieId));
		navigate("/movies");
	};

	const deleteThisReview = (id) => {
		dispatch(deleteReview(id));
	};

	return (
		<div className="container">
			<h2>Reviews for {currentMovie.title}</h2>
			{reviews && reviews.length > 0 ? (
				<TableReviews reviews={reviews} deleteReview={deleteThisReview} />
			) : (
				<p>Sorry, no movies at this time, try adding one instead or...</p>
			)}
			<button onClick={() => deleteThisMovie()} className="btn mt-2">
				Delete Movie
			</button>
		</div>
	);
};

export default Reviews;
