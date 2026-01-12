import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative";
  iconName: "users" | "cursor" | "chart" | "currency";
  color: "indigo" | "blue" | "purple" | "pink";
}

const ICONS = {
  users: (
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A9.916 9.916 0 0010 18c1.692 0 3.237-.535 4.493-1.41A5.99 5.99 0 0010 12z"
      clipRule="evenodd"
    />
  ),
  cursor: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" // Placeholder path, replacing generic cursor
      clipRule="evenodd"
    />
  ),
  // Actual paths from Dashboard.tsx
  // ... I'll try to reuse what was there or use generic ones correctly.
  // The user wants strict React 19 best practices.
};

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
    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1">
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
