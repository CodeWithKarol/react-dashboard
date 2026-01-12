import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({
  children,
  className = "",
  noPadding = false,
}: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 transition-all text-slate-900 dark:text-slate-100 ${
        noPadding ? "" : "p-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
