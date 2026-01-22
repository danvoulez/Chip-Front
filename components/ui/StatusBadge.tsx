import clsx from "clsx";
import type { CandidateStatus, RunStatus } from "@/lib/types";

type StatusBadgeProps = {
  status: CandidateStatus | RunStatus;
  tone?: "auto" | "neutral";
};

const statusToColor: Record<CandidateStatus | RunStatus, string> = {
  idle: "text-text-tertiary",
  queued: "text-accent-proof",
  running: "text-accent-proof",
  done: "text-accent-verify",
  failed: "text-accent-fail",
  created: "text-text-secondary",
  executing: "text-accent-proof",
  complete: "text-accent-verify"
};

export default function StatusBadge({ status, tone = "auto" }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-pill border border-border-proof px-2 py-1 text-xs",
        tone === "auto" ? statusToColor[status] : "text-text-secondary"
      )}
    >
      {status}
    </span>
  );
}
