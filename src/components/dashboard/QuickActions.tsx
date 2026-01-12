export function QuickActions() {
  const actions = [
    {
      name: "New User",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-1 7.6152A2.99 2.99 0 0013.5 22h-8a2.25 2.25 0 01-2.25-2.25v-8.132l4.19-4.19a2.25 2.25 0 013.18 0l1.79 1.79 3.12 3.12a2.25 2.25 0 01.659 1.591v4.6152z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      name: "Upload File",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      ),
      color: "bg-indigo-500",
    },
    {
      name: "Create Task",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      ),
      color: "bg-emerald-500",
    },
    {
      name: "Send Invoice",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 2.072c.675-.163 1.366-.322 2.072-.472"
          />
        </svg>
      ),
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          Quick Actions
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <button
              key={action.name}
              type="button"
              className="group flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-white hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 hover:shadow-sm transition-all dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500"
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${action.color} text-white shadow-sm ring-1 ring-white/20 group-hover:scale-110 transition-transform`}
              >
                {action.icon}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                {action.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
