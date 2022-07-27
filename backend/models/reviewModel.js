const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
	{
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		movieId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Movie",
		},
		description: {
			type: String,
			required: [true, "Please add a review description"],
		},
		rating: {
			type: Number,
			required: [true, "Please add a rating"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Review", reviewSchema);
