// Libs
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import TableMovies from "../components/TableMovies";
import Spinner from "../components/Spinner";
// Data
import { getMovies, reset } from "../features/movies/moviesSlice";

const Movies = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { movies, isLoading, isError, message } = useSelector(
		(state) => state.movies
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		console.log("USER: ", user);
		if (!user) {
			navigate("/login");
		}

		dispatch(getMovies());

		return () => {
			// dispatch(reset());
		};
		// }, []);
	}, [user, navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="container">
			<div className="Movies__topbar">
				<h2>Movie List</h2>
				<Link to={"new"}>
					<button className="btn">Add New Movie</button>
				</Link>
			</div>
			{movies && movies.length > 0 ? (
				<TableMovies movies={movies} />
			) : (
				<p>Sorry, no movies at this time, try adding one instead...</p>
			)}
		</div>
	);
};

export default Movies;
