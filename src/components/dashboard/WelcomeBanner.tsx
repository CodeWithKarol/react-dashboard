export function WelcomeBanner() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white shadow-md mb-8 ring-1 ring-black/5">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome back, Alex!
          </h2>
          <p className="mt-2 text-indigo-100 text-lg">
            Here's what's happening with your projects today.
          </p>
        </div>
        <div className="glass-panel p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
          <p className="text-sm font-medium text-indigo-100 uppercase tracking-wider">
            Today
          </p>
          <p className="text-xl font-semibold">{currentDate}</p>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
    </div>
  );
}
