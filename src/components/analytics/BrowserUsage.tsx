export function BrowserUsage() {
  const browsers = [
    { name: "Chrome", usage: 62.4, color: "bg-blue-500" },
    { name: "Safari", usage: 22.1, color: "bg-blue-400" },
    { name: "Firefox", usage: 8.5, color: "bg-orange-500" },
    { name: "Edge", usage: 4.2, color: "bg-sky-500" },
    { name: "Other", usage: 2.8, color: "bg-slate-400" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          Browser Usage
        </h3>
        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-5">
        {browsers.map((browser) => (
          <div key={browser.name} className="group">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {browser.name}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {browser.usage}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${browser.color} transition-all duration-1000 ease-out group-hover:bg-opacity-80`}
                style={{ width: `${browser.usage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span>
            Chrome usage increased by{" "}
            <span className="font-semibold text-green-600">3.4%</span> this
            month
          </span>
        </p>
      </div>
    </div>
  );
}
