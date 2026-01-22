import StatusBadge from "@/components/ui/StatusBadge";

export default function StatusPage() {
  return (
    <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
      <h2 className="text-lg font-semibold">Status</h2>
      <div className="mt-4 flex items-center gap-3">
        <StatusBadge status="running" />
        <span className="text-sm text-text-secondary">Streaming run events…</span>
      </div>
    </div>
  );
}
