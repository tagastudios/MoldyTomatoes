// LIBS
import { useParams } from "react-router-dom";

// COMPONENTS
import TableReviews from "../components/TableReviews";

const Reviews = () => {
	let { movieId } = useParams();

	return (
		<div className="container">
			<h2>Reviews for {movieId}</h2>
			<TableReviews />
			<button className="btn mt-2">Delete Movie</button>
		</div>
	);
};

export default Reviews;
