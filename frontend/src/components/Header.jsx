import { Link } from "react-router-dom";

const Header = () => {
	const isLoggedIn = false;
	return (
		<nav className="Header__nav container">
			<Link to="/" className="logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
					/>
				</svg>
				<h1>Moldy Tomatoes</h1>
			</Link>
			<ul>
				{isLoggedIn ? (
					<li>
						<button className="btn btn-alt btn-nav">Log Out</button>
					</li>
				) : (
					<li>
						<Link to="login">
							<button className="btn btn-alt btn-nav">Login</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Header;
