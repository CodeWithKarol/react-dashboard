"use client";

import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  PieChart,
  LogOut,
  Users,
  ShoppingBag,
} from "lucide-react";

const sidebarGroups = [
  {
    title: "Main",
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/" },
      { icon: BarChart3, label: "Analytics", href: "/analytics" },
      { icon: Users, label: "Users", href: "/users", badge: "New" },
      { icon: ShoppingBag, label: "Products", href: "/products" },
    ],
  },
  {
    title: "System",
    items: [{ icon: Settings, label: "Settings", href: "/settings" }],
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden border-r bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl md:block w-64 h-full shadow-2xl lg:shadow-none transition-all duration-300 z-10">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-16 shrink-0 items-center justify-center border-b px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <PieChart className="h-5 w-5" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-xl">
              Nexus
              <span className="text-slate-700 dark:text-slate-300">Admin</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 py-6 overflow-y-auto">
          {sidebarGroups.map((group) => (
            <nav
              key={group.title}
              className="grid items-start px-4 text-sm font-medium space-y-1 mb-6"
            >
              <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {group.title}
              </p>
              {group.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all group relative overflow-hidden",
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-r-full" />
                    )}
                    <item.icon
                      className={cn(
                        "h-5 w-5 transition-transform group-hover:scale-110",
                        isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                      )}
                    />
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 py-0.5 px-2 rounded-full text-xs font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-border">
            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              AM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Alex Morgan</p>
              <p className="text-xs text-muted-foreground truncate">
                alex@nexus.com
              </p>
            </div>
            <LogOut className="h-4 w-4 text-slate-400 hover:text-destructive cursor-pointer" />
          </div>
        </div>
      </div>
    </aside>
  );
}
