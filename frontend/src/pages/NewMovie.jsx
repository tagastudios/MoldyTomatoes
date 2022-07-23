import AddingForm from "../components/AddingForm";

const NewMovie = () => {
	return (
		<main className="NewMovie container">
			<h2>Submit a Movie and a Review</h2>
			<AddingForm includeMovie />
		</main>
	);
};

export default NewMovie;
