"use client";

import { Button } from "../ui/button";
import { Moon, Sun, Menu, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Simple theme toggler effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-4 lg:px-8 shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 md:hidden -ml-2 text-slate-700 dark:text-slate-200"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search components..."
              className="w-full appearance-none bg-transparent pl-9 border-0 focus-visible:ring-0 placeholder:text-slate-400 md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
          <span className="sr-only">Notifications</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
