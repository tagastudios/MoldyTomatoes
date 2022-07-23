// Imports
import { Routes, Route, Navigate } from "react-router-dom";
// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Reviews from "./pages/Reviews";
import NewMovie from "./pages/NewMovie";
import NewReview from "./pages/NewReview";
// CSS
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="movies" replace />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:movieId" element={<Reviews />} />
				<Route path="movies/:movieId/review" element={<NewReview />} />
				<Route path="movies/new" element={<NewMovie />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
