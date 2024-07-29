import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

import { Loading } from "../components/Loading";
import { MovieList } from "../components/MovieList";
import { getPopularMovies } from "../services/movies";

export function Home() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await getPopularMovies();
				setMovies(response);
			} catch (error) {
				console.error("Falha no carregamento de filmes" + error);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);

	return (
		<main>
			<h1 className="text-center text-5xl font-bold py-9">
				Filmes do momento
			</h1>
			{loading ? <Loading /> : <MovieList movies={movies} />}
		</main>
	);
}
