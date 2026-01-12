import React from "react";
import { RevenueChart } from "./dashboard/RevenueChart";
import { UserAcquisitionChart } from "./dashboard/UserAcquisitionChart";
import { RecentActivity } from "./dashboard/RecentActivity";
import { RecentTransactions } from "./dashboard/RecentTransactions";
import { TeamMembers } from "./dashboard/TeamMembers";
import { ProjectList } from "./dashboard/ProjectList";
import { WelcomeBanner } from "./dashboard/WelcomeBanner";
import { QuickActions } from "./dashboard/QuickActions";

export function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Overview of your project performance and team activity.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none flex gap-3">
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Export
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Create Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Main Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat Card 1 */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-2xl"></div>
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                Total Revenue
              </dt>
              <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                $45,231
                <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
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
                  12%
                </span>
              </dd>
            </div>

            {/* Stat Card 2 */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-900/20 blur-2xl"></div>
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                Active Users
              </dt>
              <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                12,456
                <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
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
                  3.2%
                </span>
              </dd>
            </div>

            {/* Stat Card 3 */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-purple-50 dark:bg-purple-900/20 blur-2xl"></div>
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                New Clients
              </dt>
              <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                45
                <span className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
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
                  0.5%
                </span>
              </dd>
            </div>

            {/* Stat Card 4 */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-amber-50 dark:bg-amber-900/20 blur-2xl"></div>
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                Satisfaction
              </dt>
              <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                98%
                <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
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
                  4%
                </span>
              </dd>
            </div>
          </div>

          <RevenueChart />

          <ProjectList />

          <RecentTransactions />
        </div>

        {/* Right Sidebar Column */}
        <div className="xl:col-span-1 space-y-8">
          <QuickActions />

          <UserAcquisitionChart />

          <TeamMembers />

          <RecentActivity />
        </div>
      </div>
    </main>
  );
}
