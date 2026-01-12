import { TEAM_MEMBERS } from "../../data/mockData";
import { Card } from "../ui/Card";

export function TeamMembers() {
  return (
    <Card noPadding className="overflow-hidden">
      <div className="p-6 pb-0 mb-4">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          Team Members
        </h3>
      </div>
      <div className="px-6 pb-6">
        <ul
          role="list"
          className="divide-y divide-slate-100 dark:divide-slate-700"
        >
          {TEAM_MEMBERS.map((person) => (
            <li
              key={person.name}
              className="flex items-center justify-between py-4 gap-x-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-x-4">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-slate-50 ring-1 ring-slate-200 dark:ring-slate-700"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                    {person.name}
                  </p>
                  <p className="flex text-xs leading-5 text-slate-500 dark:text-slate-400">
                    <a
                      href={`mailto:${person.name
                        .replace(" ", ".")
                        .toLowerCase()}@example.com`}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 truncate transition-colors"
                    >
                      {person.name.replace(" ", ".").toLowerCase()}@example.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                {person.isOnline ? (
                  <div className="flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Online
                    </p>
                  </div>
                ) : (
                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                    3h ago
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-slate-100 dark:border-slate-700 pt-4">
          <button className="w-full text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
            View All Members
          </button>
        </div>
      </div>
    </Card>
  );
}
