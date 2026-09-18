import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mt-16 mb-50 flex flex-col items-center text-center">
        <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Discover your next favorite
        </span>

        <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
          Explore amazing movies and shows
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Browse trending titles, search by name, and find the perfect movie for your next watch night.
        </p>

        <Link to="/movies"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900"
        >
          Explore Now
        </Link>
      </section>

      <footer className="mt-20 border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 MovieExplorer
      </footer>
    </main>
  );
}