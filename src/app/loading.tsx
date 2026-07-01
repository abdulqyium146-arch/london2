export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-label="Loading page content">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
        <p className="text-slate-500 text-sm">Loading…</p>
      </div>
    </div>
  )
}
