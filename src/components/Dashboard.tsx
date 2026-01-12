export function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header & Actions */}
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Welcome back, Alex. Here's what's happening today.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none flex gap-3">
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all"
          >
            <svg
              className="w-4 h-4 mr-2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Export
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:shadow-indigo-500/30 shadow-indigo-500/20"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            New Campaign
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-2xl"></div>
          <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Users
          </dt>
          <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            12,456
            <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg
                className="h-4 w-4 flex-shrink-0 self-center text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
              12%
            </span>
          </dd>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-teal-50 dark:bg-teal-900/20 blur-2xl"></div>
          <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
            Avg. Open Rate
          </dt>
          <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            58.16%
            <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg
                className="h-4 w-4 flex-shrink-0 self-center text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
              5.4%
            </span>
          </dd>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-purple-50 dark:bg-purple-900/20 blur-2xl"></div>
          <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
            PPC Reach
          </dt>
          <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            5,201
            <span className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
              <svg
                className="h-4 w-4 flex-shrink-0 self-center text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
              3.2%
            </span>
          </dd>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-pink-50 dark:bg-pink-900/20 blur-2xl"></div>
          <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">
            Revenue
          </dt>
          <dd className="mt-2 flex items-baseline text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            $245k
            <span className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg
                className="h-4 w-4 flex-shrink-0 self-center text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
              14%
            </span>
          </dd>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Line Chart */}
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
              Revenue Overview
            </h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
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
        </div>

        {/* Bar Chart */}
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6">
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
        </div>
      </div>

      {/* Tables & Activity Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Table */}
        <div className="xl:col-span-2 rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-5 flex items-center justify-between">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
              Recent Transactions
            </h3>
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Active
              </span>
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Pending
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
                    <div className="flex items-center">
                      <div className="h-9 w-9 flex-shrink-0">
                        <img
                          className="h-9 w-9 rounded-full bg-slate-100 placeholder"
                          src="https://ui-avatars.com/api/?name=Lindsay+Walton&background=random"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Lindsay Walton
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          lindsay.walton@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-300">
                    $2,450.00
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Paid
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Jan 12, 2026
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
                    <div className="flex items-center">
                      <div className="h-9 w-9 flex-shrink-0">
                        <img
                          className="h-9 w-9 rounded-full bg-slate-100 placeholder"
                          src="https://ui-avatars.com/api/?name=Courtney+Henry&background=random"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Courtney Henry
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          courtney.henry@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-300">
                    $1,950.00
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Pending
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Jan 11, 2026
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
                    <div className="flex items-center">
                      <div className="h-9 w-9 flex-shrink-0">
                        <img
                          className="h-9 w-9 rounded-full bg-slate-100 placeholder"
                          src="https://ui-avatars.com/api/?name=Tom+Cook&background=random"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          Tom Cook
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          tom.cook@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-300">
                    $850.00
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Paid
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Jan 10, 2026
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 p-6 h-fit">
          <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <ul role="list" className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white dark:ring-slate-800">
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
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        System update completed{" "}
                        <a
                          href="#"
                          className="font-medium text-slate-900 dark:text-white"
                        >
                          v2.4.0
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-slate-500 dark:text-slate-400">
                      1h
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-8 ring-white dark:ring-slate-800">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        New user registered{" "}
                        <a
                          href="#"
                          className="font-medium text-slate-900 dark:text-white"
                        >
                          Sarah Wilson
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-slate-500 dark:text-slate-400">
                      3h
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white dark:ring-slate-800">
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
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        New order{" "}
                        <a
                          href="#"
                          className="font-medium text-slate-900 dark:text-white"
                        >
                          #4210
                        </a>{" "}
                        placed
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-slate-500 dark:text-slate-400">
                      5h
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
