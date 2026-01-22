import CidPill from "@/components/ui/CidPill";
import MetricsStrip from "@/components/ui/MetricsStrip";
import ReceiptViz from "@/components/ui/ReceiptViz";
import InspectorDrawer from "@/components/layout/InspectorDrawer";

const proofPills = [
  "chip",
  "formula",
  "world",
  "policy",
  "adversity",
  "run",
  "receipt",
  "conference"
];

export default function FocusPage() {
  return (
    <div className="space-y-6">
      <ReceiptViz src={null} blurhash={null} alt="Receipt hero" />
      <div className="flex flex-wrap gap-2">
        {proofPills.map((label) => (
          <CidPill key={label} label={label} cid={`b3:${label}00112233445566`} />
        ))}
      </div>
      <MetricsStrip
        items={[
          { label: "Runtime", value: "980", unit: "ms", emphasis: true },
          { label: "RAM", value: "512", unit: "MB" },
          { label: "Cost", value: "32", unit: "cr" }
        ]}
      />
      <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
        <h3 className="text-sm uppercase tracking-[0.2em] text-text-tertiary">Outputs</h3>
        <p className="mt-2 text-sm text-text-secondary">Artifacts disponíveis em inspector.</p>
      </div>
      <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
        <h3 className="text-sm uppercase tracking-[0.2em] text-text-tertiary">Logs</h3>
        <p className="mt-2 text-sm text-text-secondary">Runtime telemetry streaming…</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {[
          "Vary",
          "Remix",
          "Battle Test",
          "Replay",
          "Compare",
          "Verify Now"
        ].map((action) => (
          <button
            key={action}
            type="button"
            className="rounded-button border border-border-proof px-4 py-2 text-sm text-text-secondary hover:bg-bg-surface-hover"
          >
            {action}
          </button>
        ))}
      </div>
      <InspectorDrawer
        open={false}
        tabs={["Receipt", "Telemetry", "Proof Bundle", "Lineage", "Errors"]}
        activeTab="Receipt"
        onClose={() => undefined}
        onTab={() => undefined}
      />
    </div>
  );
}
