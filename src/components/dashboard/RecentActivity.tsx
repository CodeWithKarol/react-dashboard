import React from "react";

interface ActivityItem {
  id: number;
  type: "update" | "user" | "order";
  content: React.ReactNode;
  time: string;
  iconBg: string;
  icon: React.ReactNode;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    type: "update",
    content: (
      <>
        System update completed{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          v2.4.0
        </span>
      </>
    ),
    time: "1h",
    iconBg: "bg-green-500",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    type: "user",
    content: (
      <>
        New user registered{" "}
        <a href="#" className="font-medium text-slate-900 dark:text-white">
          Sarah Wilson
        </a>
      </>
    ),
    time: "3h",
    iconBg: "bg-indigo-500",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
      </svg>
    ),
  },
  {
    id: 3,
    type: "order",
    content: (
      <>
        New order{" "}
        <a href="#" className="font-medium text-slate-900 dark:text-white">
          #4210
        </a>{" "}
        placed
      </>
    ),
    time: "5h",
    iconBg: "bg-blue-500",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.08l5.925 2.846A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
      <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white mb-6">
        Recent Activity
      </h3>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {ACTIVITIES.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== ACTIVITIES.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"
                    aria-hidden="true"
                  ></span>
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={`h-8 w-8 rounded-full ${activity.iconBg} flex items-center justify-center ring-8 ring-white dark:ring-slate-800`}
                    >
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {activity.content}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
