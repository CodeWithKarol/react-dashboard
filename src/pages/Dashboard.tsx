import { RevenueChart } from "../components/dashboard/RevenueChart";
import { UserAcquisitionChart } from "../components/dashboard/UserAcquisitionChart";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { TeamMembers } from "../components/dashboard/TeamMembers";
import { ProjectList } from "../components/dashboard/ProjectList";
import { WelcomeBanner } from "../components/dashboard/WelcomeBanner";
import { QuickActions } from "../components/dashboard/QuickActions";
import { StatsGrid } from "../components/dashboard/StatsGrid";

export function Dashboard() {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
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
          <WelcomeBanner />

          <StatsGrid />

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
    </>
  );
}
