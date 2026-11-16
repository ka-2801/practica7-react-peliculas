import { useEffect, useRef, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./GenreRow.css";

function GenreRow({ genre }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    get(`/discover/movie?with_genres=${genre.id}&without_genres=16%7C10751`)
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [genre.id]);

  function scroll(direction) {
    rowRef.current.scrollBy({ left: direction * 600, behavior: "smooth" });
  }

  if (movies.length === 0) return null;

  return (
    <section className="genre-row">
      <h2 className="genre-title">{genre.name}</h2>
      <div className="row-wrapper">
        <button className="arrow arrow-left" onClick={() => scroll(-1)} aria-label="Anterior">
          ‹
        </button>
        <ul className="row" ref={rowRef}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </ul>
        <button className="arrow arrow-right" onClick={() => scroll(1)} aria-label="Siguiente">
          ›
        </button>
      </div>
    </section>
  );
}

export default GenreRow;