import { AnalyticsStats } from "../components/analytics/AnalyticsStats";
import { TrafficChart } from "../components/analytics/TrafficChart";

export function Analytics() {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Analytics
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Monitor your performance and traffic sources.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700 shadow-sm">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
              7 Days
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all">
              30 Days
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all">
              90 Days
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <AnalyticsStats />

      {/* Charts & Tables Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Traffic Chart */}
        <TrafficChart />

        {/* Top Countries Table */}
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-[400px] flex flex-col transition-all hover:shadow-lg">
          <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white mb-4">
            Top Visiting Countries
          </h3>
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-medium z-10">
                <tr>
                  <th className="px-3 py-2 font-semibold">Country</th>
                  <th className="px-3 py-2 text-right font-semibold">Users</th>
                  <th className="px-3 py-2 text-right font-semibold">Bounce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {[
                  { c: "United States", f: "🇺🇸", u: "12,405", b: "45%" },
                  { c: "Germany", f: "🇩🇪", u: "8,200", b: "38%" },
                  { c: "India", f: "🇮🇳", u: "5,600", b: "55%" },
                  { c: "United Kingdom", f: "🇬🇧", u: "4,100", b: "42%" },
                  { c: "Canada", f: "🇨🇦", u: "3,800", b: "40%" },
                  { c: "France", f: "🇫🇷", u: "2,900", b: "35%" },
                  { c: "Brazil", f: "🇧🇷", u: "1,500", b: "50%" },
                  { c: "Japan", f: "🇯🇵", u: "900", b: "22%" },
                ].map((row) => (
                  <tr
                    key={row.c}
                    className="hover:bg-slate-50 dark:hover:bg-slate-750/50 transition-colors"
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 dark:text-slate-200 flex items-center">
                      <span className="mr-2 text-lg">{row.f}</span> {row.c}
                    </td>
                    <td className="px-3 py-3 text-right text-slate-500 dark:text-slate-400">
                      {row.u}
                    </td>
                    <td className="px-3 py-3 text-right text-slate-500 dark:text-slate-400">
                      {row.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors flex items-center justify-center mx-auto group">
              View All Countries
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
