import { useNavigate } from "react-router-dom";
import { Movie } from "../types/movie";

import { GoStarFill } from "react-icons/go";
import noImgBackdrop from "../assets/no-image-backdrop.png";

const apiImg = import.meta.env.VITE_IMG;

interface MovieCardProps {
	movie: Movie;
}
export function MovieCard({ movie }: MovieCardProps) {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(`/movie/${movie.id}`)}
			className="toresponse tohover cursor-pointer bg-main-color flex flex-col items-center gap-2 pb-4 overflow-hidden"
		>
			<figure className="overflow-hidden">
				<img
					src={
						movie.backdrop_path
							? `${apiImg}${movie.backdrop_path}`
							: noImgBackdrop
					}
					alt="Post do filme"
				/>
			</figure>
			<div className="w-[80%] flex flex-col gap-2 max-w-[320px]">
				<h4 className="text-2xl font-medium text-ellipsis overflow-hidden whitespace-nowrap w-full">
					{movie.title}
				</h4>
				<p className="flex items-center gap-2 font-medium">
					<GoStarFill style={{ color: "yellow" }} />
					{movie.vote_average}
				</p>
			</div>
		</div>
	);
}
