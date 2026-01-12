import { Card } from "../ui/Card";
import { DASHBOARD_STATS } from "../../data/mockData";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {DASHBOARD_STATS.map((stat) => (
        <Card
          key={stat.title}
          className="px-6 py-4 hover:ring-2 hover:ring-indigo-500/10 transition-all duration-200"
        >
          <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {stat.title}
          </dt>
          <dd className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-slate-900 dark:text-white">
              {stat.value}
            </span>
            <span
              className={`inline-flex items-baseline text-xs font-medium ${
                stat.trendType === "positive"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-rose-600 dark:text-rose-400"
              }`}
            >
              {stat.trendType === "positive" ? (
                <svg
                  className="h-3 w-3 self-center mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-3 w-3 self-center mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 13a1 1 0 110 2h5a1 1 0 011-1V9a1 1 0 11-2 0v2.586l-4.293-4.293a1 1 0 01-1.414 0L8 9.586 3.707 5.293a1 1 0 01-1.414 1.414l5 5a1 1 0 011.414 0L11 9.414 14.586 13H12z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {stat.trend}
            </span>
          </dd>
        </Card>
      ))}
    </div>
  );
}
