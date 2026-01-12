import { useState } from "react";
import { AnalyticsStats } from "../components/analytics/AnalyticsStats";
import { TrafficChart } from "../components/analytics/TrafficChart";
import { TopCountries } from "../components/analytics/TopCountries";
import { SessionDeviceChart } from "../components/analytics/SessionDeviceChart";
import { BrowserUsage } from "../components/analytics/BrowserUsage";
import { RealTimeUsers } from "../components/analytics/RealTimeUsers";

export function Analytics() {
  const [dateRange, setDateRange] = useState("30d");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock refresh handler for interactivity
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data fetch
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Analytics Overview
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Track your performance metrics and user growth in real-time.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Date Range Picker */}
          <div className="flex items-center p-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            {["7d", "30d", "90d"].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                  dateRange === range
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750"
                }`}
              >
                {range === "7d"
                  ? "7 Days"
                  : range === "30d"
                  ? "30 Days"
                  : "90 Days"}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`inline-flex items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 shadow-sm transition-all hover:shadow hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isRefreshing ? "animate-pulse cursor-not-allowed opacity-70" : ""
            }`}
            aria-label="Refresh Data"
          >
            <svg
              className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          {/* Export Button */}
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-indigo-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-slate-900">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section aria-label="Key Statistics">
        <AnalyticsStats />
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Card */}
        <TrafficChart />

        {/* Top Countries Table */}
        <TopCountries />
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SessionDeviceChart />
        <BrowserUsage />
        <RealTimeUsers />
      </div>
    </div>
  );
}
