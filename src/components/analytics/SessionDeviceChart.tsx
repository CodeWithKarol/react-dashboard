import { Card } from "../ui/Card";

export function SessionDeviceChart() {
  const data = [
    { name: "Desktop", value: 65, color: "text-indigo-500" },
    { name: "Mobile", value: 25, color: "text-purple-500" },
    { name: "Tablet", value: 10, color: "text-slate-400" },
  ];

  // Calculate coordinates for SVG donut segments is complex without a lib.
  // Instead, let's use a simpler approach with conic-gradient which is made for this in CSS,
  // or simple circles with dasharrays.
  // Circle radius = 40. Circumference = 2 * pi * 40 ~= 251.2
  const r = 40;
  const c = 2 * Math.PI * r;

  let currentOffset = 0;

  return (
    <Card className="flex flex-col shadow-md">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-6">
        Device Breakdown
      </h3>

      <div className="flex-1 flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-48 h-48 -rotate-90 transform">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            className="text-slate-100 dark:text-slate-700/30"
          />

          {data.map((item) => {
            const dashArray = (item.value / 100) * c;
            const offset = currentOffset;
            currentOffset -= dashArray; // Subtract because we want to go clockwise or maintain order

            return (
              <circle
                key={item.name}
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray={`${dashArray} ${c - dashArray}`}
                strokeDashoffset={offset} // Start where the last one ended
                className={`${item.color} transition-all duration-1000 ease-out hover:opacity-80`}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            65%
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Desktop
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${item.color.replace(
                  "text-",
                  "bg-"
                )} shadow-sm`}
              ></span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                {item.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 dark:text-slate-400">
                {item.value}%
              </span>
              <span
                className={`text-xs ${
                  item.name === "Desktop" ? "text-green-500" : "text-slate-400"
                }`}
              >
                {item.name === "Desktop" ? "↑ 2%" : "–"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
