import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movies";
import { Movie } from "../types/movie";

import { GoStarFill } from "react-icons/go";
import { Loading } from "../components/Loading";
import noImgPoster from "../assets/no-image-poster.png";

const apiImg = import.meta.env.VITE_IMG;

const initialMovie = {
	id: 0,
	poster_path: "",
	backdrop_path: "",
	title: "Indefinido",
	overview: "Sem descrição.",
	release_date: "Sem data",
	vote_average: 0,
};

export function MoviePage() {
	const [movie, setMovie] = useState<Movie>(initialMovie);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const getMovie = async () => {
			try {
				const response = await getMovieById(id);
				setMovie(response);
			} catch (error) {
				console.log("Falha no carregamento de filmes" + error);
			} finally {
				setLoading(false);
			}
		};

		getMovie();
	}, [id]);

	return (
		<main
			className="p-[2.25rem_1rem] md:h-screen md:flex md:items-center md:justify-center"
			style={{
				background: `url(${apiImg}${movie.backdrop_path}) no-repeat center center/cover`,
			}}
		>
			{loading ? (
				<Loading />
			) : (
				<div className="flex flex-col gap-6 bg-main-color-opacity md:flex-row">
					<figure className="md:max-w-[236px]">
						<img
							src={
								movie.poster_path
									? `${apiImg}${movie.poster_path}`
									: noImgPoster
							}
							alt="Pôster do filme"
						/>
					</figure>
					<section className="flex flex-col items-center justify-between p-3">
						<div className="overflow-hidden max-w-full">
							<h1 className="text-4xl text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full mb-0.5">
								{movie.title}
							</h1>
							<h3 className="text-xl mb-4 text-center">
								{movie.release_date}
							</h3>
						</div>
						<p className="text-justify text-lg mb-4">{movie.overview}</p>
						<p className="text-xl font-bold flex items-center gap-2">
							<GoStarFill style={{ color: "yellow" }} />{" "}
							{movie.vote_average}
						</p>
					</section>
				</div>
			)}
		</main>
	);
}
