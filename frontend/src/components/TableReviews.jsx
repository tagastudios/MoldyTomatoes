const TableReviews = ({ reviews, deleteReview }) => {
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
					reviews.map(({ _id, createdBy, rating, description }, i) => {
						return (
							<tr key={i}>
								<td>
									{createdBy.firstName + " " + createdBy.lastName}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon"
										fill="none"
										viewBox="0 0 24 24"
										stroke="coral"
										strokeWidth={2}
										onClick={() => deleteReview(_id)}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</td>
								<td className="ratings">{rating}</td>
								<td>{description}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default TableReviews;
