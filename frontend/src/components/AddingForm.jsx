const AddingForm = ({
	includeMovie,
	user,
	setFormData,
	submitForm,
	cancel,
}) => {
	const fullName = user && user.firstName + " " + user.lastName;

	const onChange = (e) => {
		const valueChecker =
			e.target.name === "rating" ? Number(e.target.value) : e.target.value;
		setFormData((prevState) => {
			return {
				...prevState,
				[e.target.name]: valueChecker,
			};
		});
	};

	return (
		<form onSubmit={submitForm} className="Form" action="submit">
			{includeMovie && (
				<div>
					<label htmlFor="title">Movie Title</label>
					<input
						type="text"
						name="title"
						id="title"
						onChange={onChange}
						placeholder="Add your favorite movie"
						required
					/>
				</div>
			)}
			<div>
				<label htmlFor="createdBy">Submitted By</label>
				<input
					type="text"
					name="createdBy"
					id="createdBy"
					value={fullName}
					onChange={onChange}
					disabled
				/>
			</div>
			<div>
				<label htmlFor="rating">Rating</label>
				<select required name="rating" id="rating" onChange={onChange}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div>
				<label htmlFor="description">Your Review</label>
				<textarea
					name="description"
					id="description"
					onChange={onChange}
					rows="6"
					placeholder="What is your critique about the movie?"
					required
				></textarea>
			</div>
			<div className="mt-2">
				<button type="submit" className="btn">
					Submit
				</button>
				<button onClick={cancel} type="reset" className="btn">
					Cancel
				</button>
			</div>
		</form>
	);
};

export default AddingForm;
