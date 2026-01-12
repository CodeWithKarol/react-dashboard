import { Suspense, use } from "react";
import { getDashboardData } from "../../lib/data";
import { OverviewChart } from "./overview-chart";
import { Skeleton } from "../../components/ui/skeleton";

// Conceptually a Server Component Data Fetch
// In strict Client React, we create the promise.
// In a framework, this promise would be passed from the server or created in a loader.
const dashboardPromise = getDashboardData();

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Welcome back, Alex. Here's what's happening today.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none flex gap-3">
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all"
          >
            <svg
              className="w-4 h-4 mr-2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Export
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:shadow-indigo-500/30 shadow-indigo-500/20"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            New Campaign
          </button>
        </div>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent dataPromise={dashboardPromise} />
      </Suspense>
    </div>
  );
}

function DashboardContent({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof getDashboardData>;
}) {
  const data = use(dataPromise);

  const statsColors = [
    {
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      text: "text-indigo-600",
      color: "indigo",
    },
    {
      bg: "bg-teal-50 dark:bg-teal-900/20",
      text: "text-teal-600",
      color: "teal",
    },
    {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600",
      color: "purple",
    },
    {
      bg: "bg-pink-50 dark:bg-pink-900/20",
      text: "text-pink-600",
      color: "pink",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.kpis.map((kpi, i) => {
          const style = statsColors[i % statsColors.length];
          const isPositive = kpi.trend !== "down";
          const trendColor = isPositive ? "text-green-600" : "text-red-600";

          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-2xl ${style.bg}`}
              ></div>
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400 relative z-10">
                {kpi.label}
              </dt>
              <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white relative z-10">
                {kpi.value}
                <span
                  className={`ml-2 flex items-baseline text-sm font-semibold ${trendColor}`}
                >
                  {isPositive ? (
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
                  <span className="sr-only">
                    {isPositive ? "Increased by" : "Decreased by"}
                  </span>
                  {kpi.change.replace("+", "").replace("from last month", "")}
                </span>
              </dd>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
              Revenue Overview
            </h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
              View Report
            </button>
          </div>
          <div className="h-80 w-full">
            <OverviewChart data={data.overview} />
          </div>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
              User Acquisition
            </h3>
            <select className="text-sm bg-transparent border-none text-slate-500 focus:ring-0 cursor-pointer outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          {/* Placeholder for a second chart or content */}
          <div className="h-80 w-full flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              Acquisition Chart Placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Tables & Activity Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Table */}
        <div className="xl:col-span-2 rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-5 flex items-center justify-between">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
              Recent Transactions
            </h3>
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                Active
              </span>
              <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">
                Pending
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                {data.recentSales.map((sale, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
                      <div className="flex items-center">
                        <div className="h-9 w-9 flex-shrink-0 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-300">
                          {sale.name.charAt(0)}
                          {sale.name.split(" ")[1]?.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-slate-900 dark:text-white">
                            {sale.name}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400">
                            {sale.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-300">
                      {sale.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className="inline-flex rounded-full bg-green-100 dark:bg-green-900/30 px-2 text-xs font-semibold leading-5 text-green-800 dark:text-green-400">
                        Paid
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      Jan 12, 2026
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
          <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <ul role="list" className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="relative flex gap-x-4">
                <div
                  className={`absolute left-0 top-0 flex w-6 justify-center ${
                    i === 4 ? "h-6" : "-bottom-6"
                  }`}
                >
                  <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white dark:bg-slate-800">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-100 ring-1 ring-slate-300 dark:bg-slate-700 dark:ring-slate-600"></div>
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-900 dark:text-white">
                    User X
                  </span>{" "}
                  deployed to{" "}
                  <span className="font-medium text-slate-900 dark:text-white">
                    production
                  </span>
                  .
                </p>
                <time
                  dateTime="2023-01-23T10:32"
                  className="flex-none py-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400"
                >
                  1h
                </time>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5"
          >
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-8 w-32" />
          </div>
        ))}
      </div>

      {/* Charts Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-96">
          <div className="flex justify-between mb-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-96">
          <div className="flex justify-between mb-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </div>

      {/* Tables Grid Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-96">
          <div className="flex justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-96">
          <Skeleton className="h-6 w-32 mb-6" />
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
