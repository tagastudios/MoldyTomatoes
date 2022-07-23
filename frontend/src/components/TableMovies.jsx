import { Link } from "react-router-dom";

const Table = () => {
	const movies = [
		{
			id: "Finding Nemo",
			title: "Finding Nemo",
			avgRating: 3.5,
		},
		{
			id: "Terminator",
			title: "Terminator",
			avgRating: 5,
		},
	];
	return (
		<table className="Table">
			<thead>
				<tr>
					<th>Movie Title</th>
					<th>Avg. Rating</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{movies &&
					movies.length > 0 &&
					movies.map((movie) => {
						return (
							<tr key={movie.id}>
								<td>
									<Link to={movie.id}>{movie.title}</Link>
								</td>
								<td className="ratings">{movie.avgRating}</td>
								<td className="actions">
									<Link to={movie.id}>
										<button className="btn">Read Reviews</button>
									</Link>
									<Link to={`${movie.id}/review`}>
										<button className="btn">Write a Review</button>
									</Link>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default Table;
