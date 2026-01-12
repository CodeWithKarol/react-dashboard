import { Card } from "../ui/Card";

export function TrafficChart() {
  const data = [
    { label: "Mon", organic: 35, referral: 25, social: 15 },
    { label: "Tue", organic: 45, referral: 30, social: 20 },
    { label: "Wed", organic: 40, referral: 35, social: 25 },
    { label: "Thu", organic: 50, referral: 40, social: 30 },
    { label: "Fri", organic: 60, referral: 45, social: 35 },
    { label: "Sat", organic: 30, referral: 20, social: 15 },
    { label: "Sun", organic: 25, referral: 15, social: 10 },
  ];

  const maxVal =
    Math.max(...data.map((d) => d.organic + d.referral + d.social)) * 1.1; // 10% headroom

  return (
    <Card className="h-[400px] flex flex-col shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          Traffic Sources
        </h3>
        <select className="bg-transparent text-sm font-medium text-slate-500 dark:text-slate-400 border-none focus:ring-0 cursor-pointer outline-none hover:text-indigo-600 transition-colors">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="flex-1 flex items-end space-x-2 sm:space-x-6 justify-between pt-6 px-2">
        {data.map((d) => (
          <div
            key={d.label}
            className="w-full flex flex-col items-center group relative h-full justify-end"
          >
            {/* Stacked Bar Container */}
            <div className="w-full max-w-[32px] sm:max-w-[48px] flex-1 flex flex-col justify-end gap-1 pb-2">
              {/* Social (Top) */}
              <div
                style={{ height: `${(d.social / maxVal) * 100}%` }}
                className="w-full bg-slate-200 dark:bg-slate-600 rounded-md transition-all duration-500 relative group/bar"
              >
                {/* Tooltip */}
                <div className="opacity-0 group-hover/bar:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-900 text-white text-xs rounded z-10 pointer-events-none whitespace-nowrap transition-opacity">
                  Social: {d.social}
                </div>
              </div>

              {/* Referral (Middle) */}
              <div
                style={{ height: `${(d.referral / maxVal) * 100}%` }}
                className="w-full bg-indigo-300 dark:bg-indigo-400 rounded-md transition-all duration-500 relative group/bar"
              >
                <div className="opacity-0 group-hover/bar:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-900 text-white text-xs rounded z-10 pointer-events-none whitespace-nowrap transition-opacity">
                  Referral: {d.referral}
                </div>
              </div>

              {/* Organic (Bottom) */}
              <div
                style={{ height: `${(d.organic / maxVal) * 100}%` }}
                className="w-full bg-indigo-600 rounded-md group-hover:bg-indigo-500 transition-all duration-500 relative group/bar"
              >
                <div className="opacity-0 group-hover/bar:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-900 text-white text-xs rounded z-10 pointer-events-none whitespace-nowrap transition-opacity">
                  Organic: {d.organic}
                </div>
              </div>
            </div>

            <span className="text-xs text-slate-500 font-medium h-4">
              {d.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div> Organic
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-300 dark:bg-indigo-400"></div>{" "}
          Referral
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>{" "}
          Social
        </div>
      </div>
    </Card>
  );
}
