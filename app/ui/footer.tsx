export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t-4 border-blue-500 bg-white text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
            Web Teknologi · UIA
          </p>
          <p className="mt-1 text-sm text-slate-900">
            Dikembangkan oleh{' '}
            <span className="font-semibold text-slate-900">Wahyu Naufal Satrio</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-900">
            NIM 3420230021
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-900">
            Teknik Informatika
          </span>
        </div>
        <p className="text-xs text-slate-900">
          © {new Date().getFullYear()} · Pembelajaran Web
        </p>
      </div>
    </footer>
  );
}
