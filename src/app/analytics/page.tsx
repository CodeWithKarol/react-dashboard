export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Analytics
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Detailed performance metrics and reports.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-12 text-center">
        <div className="mx-auto h-12 w-12 text-slate-400">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 006 14.25h14.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 14.25h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>
        </div>
        <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
          No reports available
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          We're still processing your data. Check back later.
        </p>
      </div>
    </div>
  );
}
