import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

interface DashboardHeaderProps {
  onOpenReport: () => void;
}

export function DashboardHeader({ onOpenReport }: DashboardHeaderProps) {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Last 30 Days");

  const exportRef = useClickOutside<HTMLDivElement>(() =>
    setIsExportOpen(false)
  );
  const dateRef = useClickOutside<HTMLDivElement>(() => setIsDateOpen(false));

  const handleExport = (format: string) => {
    setIsExportOpen(false);
    // Simulate export
    console.log(`Exporting as ${format}...`);
  };

  return (
    <div className="sm:flex sm:items-center sm:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Overview of your project performance and team activity.
        </p>
      </div>

      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none flex flex-col sm:flex-row gap-3">
        {/* Date Filter */}
        <div ref={dateRef} className="relative">
          <button
            type="button"
            onClick={() => setIsDateOpen(!isDateOpen)}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-x-1.5 rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            {selectedDate}
            <svg
              className="h-5 w-5 text-slate-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDateOpen && (
            <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black/5 focus:outline-none">
              <div className="p-1.5">
                {[
                  "Last 7 Days",
                  "Last 30 Days",
                  "Last 3 Months",
                  "Year to Date",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedDate(option);
                      setIsDateOpen(false);
                    }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      selectedDate === option
                        ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Export Dropdown */}
        <div ref={exportRef} className="relative">
          <button
            type="button"
            onClick={() => setIsExportOpen(!isExportOpen)}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-x-1.5 rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            <svg
              className="-ml-0.5 h-5 w-5 text-slate-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm4.75 6.75a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 00-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"
                clipRule="evenodd"
              />
            </svg>
            Export
          </button>

          {isExportOpen && (
            <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black/5 focus:outline-none">
              <div className="p-1.5">
                {[
                  { name: "Export as CSV", icon: "csv" },
                  { name: "Export as PDF", icon: "pdf" },
                  { name: "Export as Excel", icon: "xls" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleExport(item.name)}
                    className="group flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300 transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Create Report Button */}
        <button
          type="button"
          onClick={onOpenReport}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all gap-x-1.5"
        >
          <svg
            className="-ml-0.5 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
              clipRule="evenodd"
            />
          </svg>
          Create Report
        </button>
      </div>
    </div>
  );
}
