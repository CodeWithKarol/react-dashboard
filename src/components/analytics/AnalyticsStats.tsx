import { Card } from "../ui/Card";

export function AnalyticsStats() {
  const stats = [
    {
      name: "Total Visitors",
      value: "82.6k",
      change: "+25%",
      changeType: "increase",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      name: "Avg. Visit Duration",
      value: "2m 14s",
      change: "+7%",
      changeType: "increase",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Bounce Rate",
      value: "42.5%",
      change: "-3.2%",
      changeType: "decrease", // Good for bounce rate
      icon: (
        <svg
          className="h-6 w-6 text-white"
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
      ),
    },
    {
      name: "Active Sessions",
      value: "456",
      change: "+12",
      changeType: "neutral",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-8">
      {stats.map((item) => (
        <Card
          key={item.name}
          className="relative overflow-hidden hover:shadow-md transition-all"
        >
          <div className="flex items-center">
            <div className="rounded-lg bg-indigo-500 p-3 shadow-md shadow-indigo-500/20">
              {item.icon}
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.name}
                </dt>
                <dd>
                  <div className="flex items-baseline text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.value}
                    <span
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        item.changeType === "increase" ||
                        (item.name === "Bounce Rate" &&
                          item.changeType === "decrease")
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {item.changeType !== "neutral" ? (
                        <svg
                          className={`self-center flex-shrink-0 h-4 w-4 ${
                            item.changeType === "decrease" &&
                            item.name !== "Bounce Rate"
                              ? "rotate-180 text-rose-500"
                              : "text-emerald-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d={
                              item.changeType === "increase" ||
                              (item.name === "Bounce Rate" &&
                                item.changeType === "decrease")
                                ? "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                : "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            }
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : null}
                      {item.change}
                    </span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
