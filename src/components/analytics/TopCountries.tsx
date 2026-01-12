import { Card } from "../ui/Card";

export function TopCountries() {
  return (
    <Card
      noPadding
      className="h-[400px] flex flex-col shadow-md overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <svg
            className="w-5 h-5 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Top Countries
        </h3>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
          View All
        </button>
      </div>

      <div className="flex-1 overflow-auto custom-scrollbar p-0">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 border-b border-slate-200 dark:border-slate-700"
              >
                Country
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Users
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Bounce Rate
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {[
              { c: "United States", code: "US", f: "🇺🇸", u: 12405, b: 45 },
              { c: "Germany", code: "DE", f: "🇩🇪", u: 8200, b: 38 },
              { c: "India", code: "IN", f: "🇮🇳", u: 5600, b: 55 },
              { c: "United Kingdom", code: "GB", f: "🇬🇧", u: 4100, b: 42 },
              { c: "Canada", code: "CA", f: "🇨🇦", u: 3800, b: 40 },
              { c: "France", code: "FR", f: "🇫🇷", u: 2900, b: 35 },
              { c: "Brazil", code: "BR", f: "🇧🇷", u: 1500, b: 50 },
              { c: "Japan", code: "JP", f: "🇯🇵", u: 900, b: 22 },
            ].map((row) => (
              <tr
                key={row.code}
                className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors duration-150 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200 flex items-center gap-3">
                  <span
                    className="text-xl shadow-sm rounded-sm"
                    role="img"
                    aria-label={row.c}
                  >
                    {row.f}
                  </span>
                  <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {row.c}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {row.u.toLocaleString()}
                    </span>
                    <div className="w-16 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${(row.u / 12405) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      row.b < 40
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : row.b > 50
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {row.b}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/30">
        <p className="text-xs text-center text-slate-500 dark:text-slate-400">
          Showing top 8 countries by active users
        </p>
      </div>
    </Card>
  );
}
