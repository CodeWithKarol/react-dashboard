import { RevenueChart } from "./dashboard/RevenueChart";
import { UserAcquisitionChart } from "./dashboard/UserAcquisitionChart";
import { RecentActivity } from "./dashboard/RecentActivity";
import { RecentTransactions } from "./dashboard/RecentTransactions";
import { TeamMembers } from "./dashboard/TeamMembers";
import { ProjectList } from "./dashboard/ProjectList";
import { WelcomeBanner } from "./dashboard/WelcomeBanner";
import { QuickActions } from "./dashboard/QuickActions";
import { Card } from "./ui/Card";
import { DASHBOARD_STATS } from "../data/mockData";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { Modal } from "./ui/Modal";
import { useState } from "react";

export function Dashboard() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setIsReportModalOpen(false);
    }, 1500);
  };

  return (
    <>
      <DashboardHeader onOpenReport={() => setIsReportModalOpen(true)} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Main Column */}
        <div className="xl:col-span-2 space-y-8">
          <WelcomeBanner />

          {/* Stats Grid using Map and Card component */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARD_STATS.map((stat) => (
              <Card
                key={stat.title}
                className="relative overflow-hidden hover:shadow-md transition-all"
              >
                <div
                  className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full ${stat.bgClass} blur-2xl`}
                ></div>
                <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </dt>
                <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                  <span
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.trendType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.trendType === "positive" ? (
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
                    {stat.trend}
                  </span>
                </dd>
              </Card>
            ))}
          </div>

          <RevenueChart onViewReport={() => setIsReportModalOpen(true)} />
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
      <Modal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        title="Create New Report"
        footer={
          <>
            <button
              type="button"
              disabled={isGenerating}
              className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                isGenerating
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500"
              }`}
              onClick={handleCreateReport}
            >
              {isGenerating ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate Report"
              )}
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 sm:mt-0 sm:w-auto"
              onClick={() => setIsReportModalOpen(false)}
            >
              Cancel
            </button>
          </>
        }
      >
        <form id="report-form" className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="report-name"
              className="block text-sm font-medium leading-6 text-slate-900 dark:text-white"
            >
              Report Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="report-name"
                id="report-name"
                className="block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="e.g. Q4 Performance Review"
                defaultValue={`Report - ${new Date().toLocaleDateString()}`}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="report-type"
              className="block text-sm font-medium leading-6 text-slate-900 dark:text-white"
            >
              Report Type
            </label>
            <div className="mt-2">
              <select
                id="report-type"
                name="report-type"
                className="block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent [&>option]:text-slate-900"
              >
                <option>Executive Summary</option>
                <option>Detailed Analytics</option>
                <option>User Acquisition Logic</option>
                <option>Financial Statement</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white">
              Include Sections
            </label>
            <div className="mt-2 space-y-2">
              {["Charts & Graphs", "Raw Data Tables", "Team Comments"].map(
                (item) => (
                  <div key={item} className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id={item}
                        name={item}
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor={item}
                        className="font-medium text-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
