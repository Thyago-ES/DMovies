import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";

export function Header() {
	const [movie, setMovie] = useState<string>("");
	const navigate = useNavigate();

	const searchMovie = () => {
		if (!movie) return;
		navigate(`/search?query=${movie}`);
		setMovie("");
	};

	return (
		<header className="flex flex-col w-full items-center py-5 gap-8 border-b border-white border-opacity-40 md:flex-row md:justify-between md:px-8">
			<Link
				to="/"
				className="flex text-3xl items-center"
			>
				<img
					src="/DMovie-logo.png"
					alt="Logo"
					className="w-16"
				/>
				DMovies
			</Link>
			<div className="flex relative border border-white w-full max-w-80">
				<input
					type="text"
					placeholder="Nome do filme"
					value={movie}
					onChange={(e) => setMovie(e.target.value)}
					className="w-full h-9 text-bg-color indent-1"
				/>
				<button
					onClick={searchMovie}
					className="bg-main-color flex justify-center items-center p-2 absolute right-0 top-0 [transition:0.4s_ease] hover:bg-search-text"
				>
					<GoSearch size={20} />
				</button>
			</div>
		</header>
	);
}
