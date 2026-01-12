export function TeamMembers() {
  const members = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isOnline: true,
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isOnline: true,
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isOnline: false,
    },
    {
      name: "Whitney Francis",
      role: "Copywriter",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isOnline: true,
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isOnline: false,
    },
  ];

  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5">
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white mb-4">
          Team Members
        </h3>
        <ul
          role="list"
          className="-my-5 divide-y divide-slate-100 dark:divide-slate-700"
        >
          {members.map((person) => (
            <li key={person.name} className="flex py-4 gap-x-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-slate-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                  {person.name}
                </p>
                <p className="flex text-xs leading-5 text-slate-500 dark:text-slate-400">
                  <a
                    href={`mailto:${person.name
                      .replace(" ", ".")
                      .toLowerCase()}@example.com`}
                    className="hover:underline hover:text-indigo-600 truncate"
                  >
                    {person.name.replace(" ", ".").toLowerCase()}@example.com
                  </a>
                </p>
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
                    Last seen 3h ago
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="w-full flex justify-center items-center gap-2 rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
            View All Members
          </button>
        </div>
      </div>
    </div>
  );
}
