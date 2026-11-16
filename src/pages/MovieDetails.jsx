import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movie) return <p className="loading">Cargando información...</p>;

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="movieImage" />
      <div className="movieDetails">
        <h2>{movie.title}</h2>
        <p>
          <strong>Géneros:</strong>{" "}
          {movie.genres?.map((g) => g.name).join(", ")}
        </p>
        <p>
          <strong>Descripción:</strong> {movie.overview}
        </p>
        <Link to="/" className="back-link">← Volver al listado</Link>
      </div>
    </div>
  );
}

export default MovieDetails;