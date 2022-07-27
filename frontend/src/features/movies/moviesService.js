import axios from "axios";

const API_URL = "/api/movies/";

// Create new goal
const createMovie = async (movieData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, movieData, config);

	return response.data;
};

// Get user goals
const getMovie = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	if (response.data) {
		localStorage.setItem("movies", JSON.stringify(response.data));
	}

	return response.data;
};

// Delete user goal
const deleteMovie = async (movieId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + movieId, config);

	return response.data;
};

const moviesService = {
	createMovie,
	getMovie,
	deleteMovie,
};

export default moviesService;
