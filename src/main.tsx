import { StrictMode } from "react";
import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Root container missing in index.html");
}

createRoot(container).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
