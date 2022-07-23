import AddingForm from "../components/AddingForm";
import { useParams } from "react-router-dom";

const NewReview = () => {
	const { movieId } = useParams();
	return (
		<main className="NewReview container">
			<h2>Add a Review for {movieId}</h2>
			<AddingForm />
		</main>
	);
};

export default NewReview;
