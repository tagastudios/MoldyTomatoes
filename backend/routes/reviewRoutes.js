const express = require("express");
const router = express.Router();
const {
	getReviewsByMovieId,
	setReview,
	deleteMovie,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, setReview);
router
	.route("/:id")
	.get(protect, getReviewsByMovieId)
	.delete(protect, deleteMovie);

module.exports = router;
