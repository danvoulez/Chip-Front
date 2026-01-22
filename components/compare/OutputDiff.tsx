import type { ReceiptExpanded } from "@/lib/types";

type OutputDiffProps = {
  left: ReceiptExpanded;
  right: ReceiptExpanded;
  mode: "side_by_side" | "slider" | "blink";
};

export default function OutputDiff({ left, right, mode }: OutputDiffProps) {
  return (
    <div className="rounded-card border border-border-proof bg-bg-surface p-card-padding text-sm text-text-secondary">
      <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Mode: {mode}</p>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs text-text-tertiary">Left outputs CID</p>
          <p data-mono className="mt-1 text-text-primary">
            {left.outputs_cid}
          </p>
        </div>
        <div>
          <p className="text-xs text-text-tertiary">Right outputs CID</p>
          <p data-mono className="mt-1 text-text-primary">
            {right.outputs_cid}
          </p>
        </div>
      </div>
    </div>
  );
}
