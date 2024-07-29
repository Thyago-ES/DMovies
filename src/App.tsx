import "./index.css";

import { Outlet } from "react-router-dom";

import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

function App() {
	return (
		<>
			<Header />

			<Outlet />

			<Footer />
		</>
	);
}

export default App;
