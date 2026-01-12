import { Card } from "../ui/Card";

interface RevenueChartProps {
  onViewReport?: () => void;
}

export function RevenueChart({ onViewReport }: RevenueChartProps) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
            Revenue Overview
          </h3>
          <p className="max-w-2xl text-sm text-slate-500">
            Monthly revenue performance
          </p>
        </div>
        <button
          type="button"
          onClick={onViewReport}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View Report
        </button>
      </div>
      <div className="h-64 sm:h-80 w-full p-4">
        <div className="relative h-full w-full">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
            <div className="border-b border-slate-200 dark:border-slate-700 w-full h-0"></div>
            <div className="border-b border-slate-200 dark:border-slate-700 w-full h-0"></div>
            <div className="border-b border-slate-200 dark:border-slate-700 w-full h-0"></div>
            <div className="border-b border-slate-200 dark:border-slate-700 w-full h-0"></div>
            <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
          </div>

          {/* Charts */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Series A (Blue/Indigo) */}
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-indigo-500 shadow-sm"
              points="0,20 16.6,40 33.3,53.3 50,46.6 66.6,66.6 83.3,73.3 100,60"
              vectorEffect="non-scaling-stroke"
            />
            {/* Point markers Series A */}
            {[
              [0, 20],
              [16.6, 40],
              [33.3, 53.3],
              [50, 46.6],
              [66.6, 66.6],
              [83.3, 73.3],
              [100, 60],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.5"
                className="fill-indigo-500 bg-white"
                strokeWidth="0"
              />
            ))}

            {/* Series B (Pink/Red) */}
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-pink-500"
              points="0,86.6 16.6,93.3 33.3,76.6 50,53.3 66.6,80 83.3,73.3 100,80"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="4 4"
            />
            {/* Point markers Series B */}
            {[
              [0, 86.6],
              [16.6, 93.3],
              [33.3, 76.6],
              [50, 53.3],
              [66.6, 80],
              [83.3, 73.3],
              [100, 80],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.5"
                className="fill-pink-500"
                strokeWidth="0"
              />
            ))}
          </svg>

          {/* X-Axis Labels */}
          <div className="absolute top-full left-0 right-0 mt-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
