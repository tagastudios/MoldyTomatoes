import React from "react";

const AddingForm = ({ includeMovie }) => {
	return (
		<form className="Form" action="submit">
			{includeMovie && (
				<div>
					<label htmlFor="movieTitle">Movie Title</label>
					<input type="text" name="movieTitle" id="movieTitle" required />
				</div>
			)}
			<div>
				<label htmlFor="userName">Submitted By</label>
				<input type="text" name="userName" id="userName" required />
			</div>
			<div>
				<label htmlFor="rating">Rating</label>
				<select required name="rating" id="rating">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div>
				<label htmlFor="review">Your Review</label>
				<textarea name="review" id="review" rows="6" required></textarea>
			</div>
			<div className="mt-2">
				<button type="submit" className="btn">
					Submit
				</button>
				<button type="reset" className="btn">
					Cancel
				</button>
			</div>
		</form>
	);
};

export default AddingForm;
