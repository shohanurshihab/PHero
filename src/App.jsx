import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";

const API_URL = "https://api.tvmaze.com/shows";

export function App() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const filteredShows = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) return shows;

    return shows.filter((show) =>
      show.name.toLowerCase().includes(searchTerm)
    );
  }, [shows, query]);

  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
        <Link to="/" className="text-xl font-bold text-cyan-400">
          Nunflix
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-cyan-300">
            Home
          </Link>
          <Link to="/movies" className="hover:text-cyan-300">
            Movies
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={
            <MoviesPage
              shows={filteredShows}
              query={query}
              setQuery={setQuery}
              selectedShow={selectedShow}
              setSelectedShow={setSelectedShow}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
