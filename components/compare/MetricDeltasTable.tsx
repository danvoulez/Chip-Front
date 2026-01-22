import type { ReceiptExpanded } from "@/lib/types";
import { formatNumber } from "@/lib/utils/format";

type MetricDeltasTableProps = {
  left: ReceiptExpanded;
  right: ReceiptExpanded;
};

export default function MetricDeltasTable({ left, right }: MetricDeltasTableProps) {
  const rows = [
    { label: "Runtime", left: left.metrics.runtime_ms, right: right.metrics.runtime_ms },
    { label: "RAM", left: left.metrics.peak_ram_mb, right: right.metrics.peak_ram_mb },
    { label: "Cost", left: left.metrics.cost_credits, right: right.metrics.cost_credits }
  ];

  return (
    <table className="w-full rounded-card border border-border-proof bg-bg-surface text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-[0.2em] text-text-tertiary">
          <th className="px-4 py-3">Metric</th>
          <th className="px-4 py-3">Left</th>
          <th className="px-4 py-3">Right</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-t border-border-proof">
            <td className="px-4 py-3 text-text-secondary">{row.label}</td>
            <td className="px-4 py-3 text-text-primary">{formatNumber(row.left)}</td>
            <td className="px-4 py-3 text-text-primary">{formatNumber(row.right)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
