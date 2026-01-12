import { useTheme } from "../../hooks/useTheme";
import { HeaderSearch } from "./header/HeaderSearch";
import { NotificationsMenu } from "./header/NotificationsMenu";
import { UserMenu } from "./header/UserMenu";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export function Header({ onToggleSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-20 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Hamburger */}
      <button
        id="sidebar-toggle"
        type="button"
        className="-m-2.5 p-2.5 text-slate-700 dark:text-slate-200 lg:hidden hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        onClick={onToggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Search */}
      <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
        <HeaderSearch />

        {/* Right Actions */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            className="-m-2.5 p-2.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            onClick={toggleTheme}
            aria-label="Toggle theme" // Added accessiblity label
          >
            {/* Sun Icon */}
            {!isDark ? (
              <svg
                id="moon-icon"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                id="sun-icon"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Notification Bell */}
          <NotificationsMenu />

          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200 dark:bg-slate-700"
            aria-hidden="true"
          ></div>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
