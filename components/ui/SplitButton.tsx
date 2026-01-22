import type { ReactNode } from "react";

type SplitButtonProps = {
  label: string;
  onPrimary: () => void;
  onSecondary: () => void;
  secondaryLabel?: string;
  icon?: ReactNode;
};

export default function SplitButton({
  label,
  onPrimary,
  onSecondary,
  secondaryLabel = "Opções",
  icon
}: SplitButtonProps) {
  return (
    <div className="inline-flex overflow-hidden rounded-button border border-border-proof">
      <button
        type="button"
        onClick={onPrimary}
        className="flex items-center gap-2 bg-bg-surface px-4 py-2 text-sm text-text-primary hover:bg-bg-surface-hover"
      >
        {icon}
        {label}
      </button>
      <button
        type="button"
        onClick={onSecondary}
        className="border-l border-border-proof bg-bg-surface px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
      >
        {secondaryLabel}
      </button>
    </div>
  );
}
