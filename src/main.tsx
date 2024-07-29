import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home.tsx";
import { Search } from "./pages/Search.tsx";
import { MoviePage } from "./pages/MoviePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/movie/:id" element={<MoviePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
