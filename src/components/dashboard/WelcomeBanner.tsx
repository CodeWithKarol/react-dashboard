export function WelcomeBanner() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-900/5 mb-8">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back, Alex!
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-lg">
            Here's what's happening with your projects today.
          </p>
        </div>
        <div className="flex items-center gap-x-2 bg-slate-50 dark:bg-slate-700/50 px-4 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700">
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5zm0 5.25h13.5h-13.5z"
            />
          </svg>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
}
