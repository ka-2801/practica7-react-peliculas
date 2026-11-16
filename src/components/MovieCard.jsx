import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieCard.css";

function MovieCard({ title, posterPath, movieId }) {
  const imageUrl = getMovieImg(posterPath, 500);

  return (
    <li className="poster-card">
      <Link to={`/movies/${movieId}`} className="poster-link">
        <img src={imageUrl} alt={title} className="poster-img" />
        <h2 className="poster-title">{title}</h2>
      </Link>
    </li>
  );
}

export default MovieCard;