import { Link } from "react-router-dom";

const Table = ({ movies }) => {
	return (
		<table className="Table Table_Movies">
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
					movies.map(({ id, title, rating, createdAt }) => {
						return (
							<tr key={id}>
								<td>
									<Link to={id}>{title}</Link>
								</td>
								<td className="ratings">{rating ? rating.toFixed(2) : 0}</td>
								<td className="actions">
									<Link to={id}>
										<button className="btn">Read Reviews</button>
									</Link>
									<Link to={`${id}/review`}>
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
