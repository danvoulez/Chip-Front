import type { CandidateViewModel } from "@/lib/types";
import CidPill from "@/components/ui/CidPill";
import StatusBadge from "@/components/ui/StatusBadge";
import MetricsStrip from "@/components/ui/MetricsStrip";
import ProgressLines from "@/components/ui/ProgressLines";
import ReceiptViz from "@/components/ui/ReceiptViz";
import { formatNumber } from "@/lib/utils/format";

type CandidateCardProps = {
  candidate: CandidateViewModel;
  onOpenReceipt: (receiptCid: string) => void;
  onToggleCompare: (receiptCid: string) => void;
  onVary: (receiptCid: string, strength: "subtle" | "strong") => void;
};

export default function CandidateCard({
  candidate,
  onOpenReceipt,
  onToggleCompare,
  onVary
}: CandidateCardProps) {
  const metrics = [
    {
      label: "Runtime",
      value: formatNumber(candidate.metrics.runtime_ms),
      unit: "ms"
    },
    {
      label: "RAM",
      value: formatNumber(candidate.metrics.peak_ram_mb),
      unit: "MB"
    },
    {
      label: "Cost",
      value: formatNumber(candidate.metrics.cost_credits),
      unit: "cr"
    }
  ];

  return (
    <div className="flex h-full flex-col gap-4 rounded-card border border-border-proof bg-bg-surface p-card-padding shadow-surface">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.2em] text-text-tertiary">
          Candidate {candidate.index + 1}
        </div>
        <StatusBadge status={candidate.status} />
      </div>
      <ReceiptViz
        src={candidate.receipt_viz_url}
        blurhash={candidate.blurhash}
        alt={`Receipt viz ${candidate.index}`}
      />
      <ProgressLines
        lines={candidate.progress_lines.map((line, index) => ({
          text: line,
          state: index === candidate.progress_lines.length - 1 ? "active" : "done"
        }))}
      />
      <MetricsStrip items={metrics} layout="grid" />
      {candidate.receipt_cid ? (
        <div className="flex flex-wrap gap-2">
          <CidPill label="Receipt" cid={candidate.receipt_cid} />
          {candidate.determinism_grade ? (
            <span className="rounded-pill border border-border-proof px-3 py-1 text-xs text-text-secondary">
              Grade {candidate.determinism_grade}
            </span>
          ) : null}
        </div>
      ) : null}
      {candidate.receipt_cid ? (
        <div className="mt-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onOpenReceipt(candidate.receipt_cid ?? "")}
            className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
          >
            View Receipt
          </button>
          <button
            type="button"
            onClick={() => onToggleCompare(candidate.receipt_cid ?? "")}
            className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
          >
            Compare
          </button>
          <button
            type="button"
            onClick={() => onVary(candidate.receipt_cid ?? "", "strong")}
            className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
          >
            Vary
          </button>
        </div>
      ) : null}
    </div>
  );
}
