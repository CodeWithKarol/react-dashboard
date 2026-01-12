import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    name: "Users",
    href: "#",
    badge: "New",
    icon: (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Products",
    href: "#",
    icon: (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
  },
];

const systemNavigation = [
  {
    name: "Settings",
    href: "#",
    icon: (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.581-.495.644-.869l.214-1.281Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-linear`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out lg:static lg:w-72 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-slate-900 px-6 pb-4 border-r border-slate-200 dark:border-slate-800">
          <div className="flex h-16 shrink-0 items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Nexus
              <span className="text-slate-700 dark:text-slate-200">Admin</span>
            </span>
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              {/* Main Navigation */}
              <li>
                <div className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-wider mb-2">
                  Main
                </div>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith("/") && !item.href.includes("#") ? (
                        <NavLink
                          to={item.href}
                          end={item.href === "/"}
                          className={({ isActive }) =>
                            `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                              isActive
                                ? "bg-slate-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                                : "text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`${
                                  isActive
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                                }`}
                              >
                                {item.icon}
                              </span>
                              {item.name}
                              {item.badge && (
                                <span
                                  className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white dark:bg-slate-700 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-indigo-600 ring-1 ring-inset ring-slate-200 dark:ring-slate-600"
                                  aria-hidden="true"
                                >
                                  {item.badge}
                                </span>
                              )}
                            </>
                          )}
                        </NavLink>
                      ) : (
                        <a
                          href={item.href}
                          className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        >
                          <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {item.icon}
                          </span>
                          {item.name}
                          {item.badge && (
                            <span
                              className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white dark:bg-slate-700 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-indigo-600 ring-1 ring-inset ring-slate-200 dark:ring-slate-600"
                              aria-hidden="true"
                            >
                              {item.badge}
                            </span>
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              {/* System Navigation */}
              <li>
                <div className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-wider mb-2">
                  System
                </div>
                <ul role="list" className="-mx-2 space-y-1">
                  {systemNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      >
                        <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {item.icon}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* User Profile */}
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200"
                    src="https://ui-avatars.com/api/?name=Alex+Morgan&background=6366f1&color=fff"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true" className="flex items-center">
                    Alex Morgan
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
