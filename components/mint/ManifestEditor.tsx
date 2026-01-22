import type { CidStr } from "@/lib/types";
import CidPill from "@/components/ui/CidPill";

type ManifestEditorProps = {
  chipManifest: Record<string, unknown>;
  formulaManifest: Record<string, unknown>;
  readonlyCids: CidStr[];
  onChange: (manifest: Record<string, unknown>) => void;
  onValidate: () => void;
};

export default function ManifestEditor({
  chipManifest,
  formulaManifest,
  readonlyCids,
  onChange,
  onValidate
}: ManifestEditorProps) {
  return (
    <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
      <div className="flex flex-wrap gap-2">
        {readonlyCids.map((cid) => (
          <CidPill key={cid} label="CID" cid={cid} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Chip Manifest</p>
          <textarea
            value={JSON.stringify(chipManifest, null, 2)}
            onChange={(event) => onChange({ chip: event.target.value })}
            className="mt-2 min-h-[160px] w-full rounded-card border border-border-proof bg-bg-canvas p-3 text-xs text-text-secondary"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Formula Manifest</p>
          <textarea
            value={JSON.stringify(formulaManifest, null, 2)}
            onChange={(event) => onChange({ formula: event.target.value })}
            className="mt-2 min-h-[160px] w-full rounded-card border border-border-proof bg-bg-canvas p-3 text-xs text-text-secondary"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onValidate}
        className="mt-4 rounded-button border border-border-proof px-4 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
      >
        Validate
      </button>
    </div>
  );
}
