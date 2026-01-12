// RealTimeUsers.tsx
export function RealTimeUsers() {
  return (
    <div className="bg-indigo-600 rounded-xl shadow-md shadow-indigo-500/20 p-6 text-white relative overflow-hidden flex flex-col justify-between h-full ring-1 ring-indigo-500">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 rounded-full bg-black/10 blur-xl"></div>

      <div>
        <h3 className="text-lg font-semibold mb-1 relative z-10 tracking-tight">
          Real-Time Users
        </h3>
        <p className="text-indigo-100 text-sm mb-6 relative z-10">
          Active right now
        </p>

        <div className="flex items-baseline gap-2 relative z-10">
          <span className="text-5xl font-bold tracking-tight">248</span>
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <p className="text-sm text-indigo-100 mb-2">
          <span className="font-bold text-white">+12%</span> vs last hour
        </p>

        <div className="space-y-2">
          <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-white/90 w-3/4 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-indigo-100/90 font-medium">
            <span>Desktop: 85%</span>
            <span>Mobile: 15%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
