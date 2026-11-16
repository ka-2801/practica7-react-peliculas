import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">MoviesW4tch</h1>
      </header>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;