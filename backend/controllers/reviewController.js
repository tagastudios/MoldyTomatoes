const asyncHandler = require("express-async-handler");

const Review = require("../models/reviewModel");
const Movie = require("../models/movieModel");
const User = require("../models/userModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getReviewsByMovieId = asyncHandler(async (req, res) => {
	const reviews = await Review.find({ movieId: req.params.id }).populate(
		"createdBy"
	);

	res.status(200).json(reviews);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setReview = asyncHandler(async (req, res) => {
	if (!req.body.movieId) {
		res.status(400);
		throw new Error("Please add a ");
	}

	const review = await Review.create({
		createdBy: req.user.id,
		movieId: req.body.movieId,
		rating: req.body.rating,
		description: req.body.description,
	});

	res.status(200).json(review);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
	const review = await Review.findById(req.params.id);

	if (!review) {
		res.status(400);
		throw new Error("Review not found");
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure the logged in user matches the goal user
	if (review.createdBy.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	await review.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getReviewsByMovieId,
	setReview,
	deleteMovie,
};
