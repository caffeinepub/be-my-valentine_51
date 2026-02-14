export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-out">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-pulse-heart">❤️</div>
        <p className="text-white text-2xl font-semibold">Loading Love…</p>
      </div>
    </div>
  );
}
