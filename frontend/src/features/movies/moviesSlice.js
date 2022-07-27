import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moviesService from "./moviesService";

const movies = JSON.parse(localStorage.getItem("movies"));

const initialState = {
	movies: movies ? movies : [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Create new movie
export const createMovie = createAsyncThunk(
	"movies/create",
	async (movieData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await moviesService.createMovie(movieData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get user movies
export const getMovies = createAsyncThunk(
	"movies/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await moviesService.getMovie(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Delete movie
export const deleteMovie = createAsyncThunk(
	"movies/delete",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await moviesService.deleteMovie(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createMovie.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createMovie.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.movies.push(action.payload);
			})
			.addCase(createMovie.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getMovies.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovies.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.movies = action.payload;
			})
			.addCase(getMovies.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteMovie.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteMovie.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.movies = state.movies.filter(
					(movie) => movie._id !== action.payload.id
				);
			})
			.addCase(deleteMovie.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;
