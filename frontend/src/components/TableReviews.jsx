const TableMovies = () => {
	const reviews = [
		{
			id: 0,
			reviewer: "Rick",
			rating: 0,
			description: "Bad movie, won't recommend it to anybody",
		},
		{
			id: 1,
			reviewer: "James",
			rating: 5,
			description: `Love it! Def a movie to watch over and over again. I cried
			emotionally when he said: Hasta la vista baby!`,
		},
	];
	return (
		<table className="Table">
			<thead>
				<tr>
					<th>Reviewer</th>
					<th>Rating</th>
					<th>Review</th>
				</tr>
			</thead>
			<tbody>
				{reviews &&
					reviews.length > 0 &&
					reviews.map(({ reviewer, rating, description }) => {
						return (
							<tr>
								<td>{reviewer}</td>
								<td>{rating}</td>
								<td>{description}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default TableMovies;
