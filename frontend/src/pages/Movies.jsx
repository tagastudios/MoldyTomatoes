import TableMovies from "../components/TableMovies";
import { Link } from "react-router-dom";

const Movies = () => {
	return (
		<div className="container">
			<div className="Movies__topbar">
				<h2>Movie List</h2>
				<Link to={"new"}>
					<button className="btn">Add New Movie</button>
				</Link>
			</div>
			<TableMovies />
		</div>
	);
};

export default Movies;
