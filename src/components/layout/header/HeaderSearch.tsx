import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";

const RECENT_SEARCHES = [
  "Analytics Dashboard",
  "User Settings",
  "Revenue Report",
  "Team Members",
];

export function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFocus = () => setIsOpen(true);

  return (
    <div ref={containerRef} className="relative flex flex-1">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          id="search-field"
          className="block h-full w-full border-0 py-2 pl-10 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 bg-transparent sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
          placeholder="Search..."
          type="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          autoComplete="off"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {!query && (
            <kbd className="hidden pointer-events-none sm:inline-block rounded border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
              Ctrl K
            </kbd>
          )}
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">Clear search</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-96 overflow-y-auto rounded-lg bg-white dark:bg-slate-800 py-2 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10">
          {query === "" ? (
            <>
              <div className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Recent Searches
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-200">
                {RECENT_SEARCHES.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-4 py-12 text-center text-sm text-slate-500 dark:text-slate-400">
              <p>No results found for "{query}"</p>
            </div>
          )}
          <div className="border-t border-slate-100 dark:border-slate-700 mt-2 pt-2 px-4 py-2">
            <p className="text-xs text-slate-400">
              Press{" "}
              <kbd className="font-medium text-slate-500 dark:text-slate-300">
                ↵
              </kbd>{" "}
              to select,{" "}
              <kbd className="font-medium text-slate-500 dark:text-slate-300">
                ↑
              </kbd>{" "}
              <kbd className="font-medium text-slate-500 dark:text-slate-300">
                ↓
              </kbd>{" "}
              to navigate
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
