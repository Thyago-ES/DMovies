import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
	movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
	return (
		<section className="grid gap-8 px-10 grid-cols-auto-fill justify-items-center">
			{movies.map((movie) => (
				<MovieCard
					movie={movie}
					key={movie.id}
				/>
			))}
		</section>
	);
}
