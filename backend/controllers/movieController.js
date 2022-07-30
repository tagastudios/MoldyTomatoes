const asyncHandler = require("express-async-handler");

const Movie = require("../models/movieModel");
const Review = require("../models/reviewModel");
const User = require("../models/userModel");

// @desc    Get movies
// @route   GET /api/movies
// @access  Private
const getMovies = asyncHandler(async (req, res) => {
	const groupedReviews = await Review.aggregate([
		{
			$group: {
				_id: "$movieId",
				avgRating: { $avg: "$rating" },
			},
		},
	]);
	const rawMovies = await Movie.find();

	const movies = rawMovies.map((movie) => {
		const reviewGroup = groupedReviews.find((review) => {
			return review._id.equals(movie._id);
		});

		const avgRating = reviewGroup ? reviewGroup.avgRating : 0;

		// if (movie.avgRating !== avgRating) {
		// 	const update = Movie.findOneAndUpdate({ _id: movie._id }, { avgRating });
		// }

		return {
			...movie._doc,
			avgRating,
		};
	});

	res.status(200).json(movies);
});

// @desc    Set movie
// @route   POST /api/movies
// @access  Private
const setMovie = asyncHandler(async (req, res) => {
	if (!req.body.title) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const movie = await Movie.create({
		createdBy: req.user.id,
		title: req.body.title,
		avgRating: req.body.avgRating,
	});

	res.status(200).json(movie);
});

// @desc    Update movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id);

	if (!movie) {
		res.status(400);
		throw new Error("Movie not found");
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure the logged in user matches the movie user
	if (movie.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedMovie);
});

// @desc    Delete movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id);
	const reviews = await Review.deleteMany({ movieId: movie._id });

	if (!movie) {
		res.status(400);
		throw new Error("Movie not found");
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure the logged in user matches the movie user
	if (movie.createdBy.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	console.log(reviews);
	await movie.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getMovies,
	setMovie,
	updateMovie,
	deleteMovie,
};
