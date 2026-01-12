import React from "react";

// Let's refine the component to take `React.ReactNode` for icon or specific paths if we want to be pure.
// For now, I'll stick to passing children or specific props.

export function StatsCard({
  title,
  value,
  trend,
  trendType,
  children, // Icon
  colorClass, // e.g., "bg-indigo-50 dark:bg-indigo-900/20"
}: {
  title: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative";
  children: React.ReactNode;
  colorClass: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10 p-6 transition-all hover:shadow-md hover:-translate-y-1">
      <div
        className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-2xl ${colorClass}`}
      ></div>
      <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </dt>
      <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {value}
        <span
          className={`ml-2 flex items-baseline text-sm font-semibold ${
            trendType === "positive" ? "text-green-600" : "text-red-600"
          }`}
        >
          {trendType === "positive" ? (
            <svg
              className="h-4 w-4 flex-shrink-0 self-center text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4 flex-shrink-0 self-center text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {trend}
        </span>
      </dd>
      <div className="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-400">
        {/* Icon container */}
        {children}
        <span className="ml-2">vs last month</span>
      </div>
    </div>
  );
}
