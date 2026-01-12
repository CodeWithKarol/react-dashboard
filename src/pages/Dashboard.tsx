import { useState } from "react";
import { RevenueChart } from "../components/dashboard/RevenueChart";
import { UserAcquisitionChart } from "../components/dashboard/UserAcquisitionChart";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { TeamMembers } from "../components/dashboard/TeamMembers";
import { ProjectList } from "../components/dashboard/ProjectList";
import { WelcomeBanner } from "../components/dashboard/WelcomeBanner";
import { QuickActions } from "../components/dashboard/QuickActions";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { Modal } from "../components/ui/Modal";

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

          <StatsGrid />

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
              className={`inline-flex w-full justify-center items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:w-auto ${
                isGenerating
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-500/20"
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
                  <span className="whitespace-nowrap">Generating...</span>
                </>
              ) : (
                <span className="whitespace-nowrap">Generate Report</span>
              )}
            </button>
            <button
              type="button"
              className="mt-2 sm:mt-0 inline-flex w-full justify-center rounded-lg bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all sm:w-auto"
              onClick={() => setIsReportModalOpen(false)}
            >
              Cancel
            </button>
          </>
        }
      >
        <div className="space-y-6 py-2">
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
                className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 dark:bg-white/5 transition-colors focus:bg-white dark:focus:bg-slate-800"
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
            <div className="relative mt-2">
              <select
                id="report-type"
                name="report-type"
                className="block w-full appearance-none rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 dark:bg-white/5 transition-colors focus:bg-white dark:focus:bg-slate-800 [&>option]:text-slate-900"
              >
                <option>Executive Summary</option>
                <option>Detailed Analytics</option>
                <option>User Acquisition Logic</option>
                <option>Financial Statement</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white mb-3">
              Include Sections
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Charts & Graphs", "Raw Data Tables", "Team Comments"].map(
                (item) => (
                  <div
                    key={item}
                    className="relative flex items-start gap-x-3 rounded-lg border border-slate-200 dark:border-slate-700 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex h-6 items-center">
                      <input
                        id={item}
                        name={item}
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-800 cursor-pointer"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor={item}
                        className="font-medium text-slate-900 dark:text-slate-200 cursor-pointer"
                      >
                        {item}
                      </label>
                      <p className="text-xs text-slate-500">
                        Add {item.toLowerCase()} to output
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
