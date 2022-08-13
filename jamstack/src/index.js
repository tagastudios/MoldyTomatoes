// Libs
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
// CSS
import "./index.css";
// Components
import App from "./App";
// Configs
import "./configs/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);