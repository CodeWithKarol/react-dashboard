import { Card } from "../ui/Card";

export function UserAcquisitionChart() {
  return (
    <Card className="shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          User Acquisition
        </h3>
        <select className="text-sm bg-transparent border-none text-slate-500 focus:ring-0 cursor-pointer">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
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

          {/* Bar Chart SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Q1 */}
            <g>
              <rect
                x="5"
                y="68"
                width="15"
                height="32"
                className="fill-indigo-500"
                rx="2"
              />
              <rect
                x="5"
                y="60"
                width="15"
                height="8"
                className="fill-purple-500"
                rx="2"
              />
              <rect
                x="5"
                y="56"
                width="15"
                height="4"
                className="fill-pink-500"
                rx="2"
              />
            </g>

            {/* Q2 */}
            <g>
              <rect
                x="30"
                y="52"
                width="15"
                height="48"
                className="fill-indigo-500"
                rx="2"
              />
              <rect
                x="30"
                y="36"
                width="15"
                height="16"
                className="fill-purple-500"
                rx="2"
              />
              <rect
                x="30"
                y="28"
                width="15"
                height="8"
                className="fill-pink-500"
                rx="2"
              />
            </g>

            {/* Q3 */}
            <g>
              <rect
                x="55"
                y="44"
                width="15"
                height="56"
                className="fill-indigo-500"
                rx="2"
              />
              <rect
                x="55"
                y="24"
                width="15"
                height="20"
                className="fill-purple-500"
                rx="2"
              />
              <rect
                x="55"
                y="8"
                width="15"
                height="16"
                className="fill-pink-500"
                rx="2"
              />
            </g>

            {/* Q4 */}
            <g>
              <rect
                x="80"
                y="48"
                width="15"
                height="52"
                className="fill-indigo-500"
                rx="2"
              />
              <rect
                x="80"
                y="36"
                width="15"
                height="12"
                className="fill-purple-500"
                rx="2"
              />
              <rect
                x="80"
                y="12"
                width="15"
                height="24"
                className="fill-pink-500"
                rx="2"
              />
            </g>
          </svg>

          {/* X-Axis Labels */}
          <div className="absolute top-full left-0 right-0 mt-2 flex justify-around text-xs text-slate-500 dark:text-slate-400 px-2">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
