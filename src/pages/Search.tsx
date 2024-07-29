import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../types/movie";
import { getSearchedMovies } from "../services/movies";

import { Loading } from "../components/Loading";
import { MovieList } from "../components/MovieList";

export function Search() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");

	useEffect(() => {
		const searchMovies = async () => {
			try {
				const response = await getSearchedMovies(query);
				setMovies(response);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		searchMovies();
	}, [query]);

	return (
		<main>
			<h1 className="text-center text-2xl font-bold py-9">
				Resultado para: {query!.toUpperCase()}
			</h1>
			{loading ? <Loading /> : <MovieList movies={movies} />}
		</main>
	);
}
