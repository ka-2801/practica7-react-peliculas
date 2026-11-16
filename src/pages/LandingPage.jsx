import GenreRow from "../components/GenreRow";

const GENRES = [
  { id: 28, name: "Acción" },
  { id: 35, name: "Comedia" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Terror" },
  { id: 878, name: "Ciencia ficción" },
];

function LandingPage() {
  return (
    <main>
      {GENRES.map((genre) => (
        <GenreRow key={genre.id} genre={genre} />
      ))}
    </main>
  );
}

export default LandingPage;