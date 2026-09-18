import MovieModal from "./MovieModal";

export default function MoviesPage({ shows, query, setQuery, selectedShow, setSelectedShow }) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {shows.map((show) => (
            <div
              key={show.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={
                  show.image?.medium}
                alt={show.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{show.name}</h2>

                <p className="mt-2 text-sm text-slate-400">
                  ⭐ {show.rating?.average ?? "N/A"} • 📅{" "}
                  {show.premiered?.slice(0, 4) ?? "N/A"}
                </p>

                <button
                  onClick={() => setSelectedShow(show)}
                  className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedShow && (
          <MovieModal
            show={selectedShow}
            onClose={() => setSelectedShow(null)}
          />
        )}
      </div>
    </main>
  );
}