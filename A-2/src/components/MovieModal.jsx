export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const summary =
    show.summary?.replace(/<[^>]*>/g, "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-auto rounded-2xl border border-slate-700 bg-slate-900 h-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-white"
          >
            ✕
          </button>

          <img
            src={
              show.image?.original
            }
            alt={show.name}
            className="h-72 w-full object-fill"
          />
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold">{show.name}</h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span>⭐ {show.rating?.average ?? "N/A"}</span>
            <span>•</span>
            <span>📅 {show.premiered?.slice(0, 4) ?? "N/A"}</span>
            <span>•</span>
            <span>{show.genres?.join(", ") || "not found"}</span>
          </div>

          <p className="mt-5 leading-7 text-slate-200">{summary}</p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}