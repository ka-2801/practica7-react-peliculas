import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">MoviesW4tch</h1>
      </header>
      <AppRouter />
    </div>
  );
}

export default App;