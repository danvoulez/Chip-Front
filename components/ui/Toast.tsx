import type { ReactNode } from "react";

type ToastProps = {
  title: string;
  description?: ReactNode;
};

export default function Toast({ title, description }: ToastProps) {
  return (
    <div className="rounded-card border border-border-proof bg-bg-surface px-4 py-3 shadow-surface">
      <p className="text-sm font-semibold text-text-primary">{title}</p>
      {description ? <p className="text-xs text-text-secondary">{description}</p> : null}
    </div>
  );
}
