import { useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";

type Notification = {
  id: number;
  title: string;
  desc: string;
  time: string;
  read: boolean;
  type: "info" | "warning" | "success";
};

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: "New User Registered",
    desc: "Sarah Wilson has just signed up.",
    time: "5m ago",
    read: false,
    type: "info",
  },
  {
    id: 2,
    title: "System Update",
    desc: "Version 2.4.0 has been deployed.",
    time: "1h ago",
    read: false,
    type: "success",
  },
  {
    id: 3,
    title: "High Memory Usage",
    desc: "Server memory usage exceeded 85%.",
    time: "2h ago",
    read: true,
    type: "warning",
  },
];

export function NotificationsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div ref={containerRef} className="relative -m-2.5">
      <button
        type="button"
        className="p-2.5 text-slate-400 hover:text-slate-500 relative transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">View notifications</span>
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2.5 w-80 origin-top-right rounded-xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 focus:outline-none">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Mark all as read
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-sm text-slate-500">
                No notifications
              </div>
            ) : (
              <ul
                role="list"
                className="divide-y divide-slate-100 dark:divide-slate-700"
              >
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`relative px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                      !notification.read
                        ? "bg-slate-50/50 dark:bg-slate-800/50"
                        : ""
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex justify-between gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-medium leading-6 text-slate-900 dark:text-white">
                          <span className="absolute inset-0" />
                          {notification.title}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {notification.desc}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-y-1">
                        <p className="text-xs leading-5 text-slate-400">
                          {notification.time}
                        </p>
                        {!notification.read && (
                          <div className="h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white dark:ring-slate-800" />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t border-slate-100 dark:border-slate-700 px-4 py-3">
            <a
              href="#"
              className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View all notification history
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
