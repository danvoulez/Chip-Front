import type { ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
};

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 rounded-md border border-border-proof bg-bg-surface px-2 py-1 text-xs text-text-secondary opacity-0 shadow-surface transition-opacity group-hover:opacity-100">
        {content}
      </span>
    </span>
  );
}
