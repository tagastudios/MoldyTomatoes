import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import moviesReducer from "../features/movies/moviesSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		movies: moviesReducer,
		reviews: reviewsReducer,
	},
});
