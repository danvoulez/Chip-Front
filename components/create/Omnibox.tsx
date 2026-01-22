import type { WorldId } from "@/lib/types";

type OmniboxProps = {
  chipRef: string;
  formulaRef: string;
  worldId: WorldId | null;
  mode: "fast" | "relax";
  theme: string | null;
  onPlan: () => void;
  onExecute: () => void;
};

export default function Omnibox({
  chipRef,
  formulaRef,
  worldId,
  mode,
  theme,
  onPlan,
  onExecute
}: OmniboxProps) {
  const ready = Boolean(chipRef && formulaRef && worldId);

  return (
    <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding shadow-surface">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Chip</p>
          <input
            value={chipRef}
            readOnly
            className="mt-2 w-full rounded-button border border-border-proof bg-bg-canvas px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Formula</p>
          <input
            value={formulaRef}
            readOnly
            className="mt-2 w-full rounded-button border border-border-proof bg-bg-canvas px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">World</p>
          <input
            value={worldId ?? ""}
            readOnly
            className="mt-2 w-full rounded-button border border-border-proof bg-bg-canvas px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Mode</p>
          <input
            value={`${mode}${theme ? ` • ${theme}` : ""}`}
            readOnly
            className="mt-2 w-full rounded-button border border-border-proof bg-bg-canvas px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onPlan}
          className="rounded-button border border-border-proof bg-bg-canvas px-4 py-2 text-sm text-text-secondary hover:bg-bg-surface-hover"
        >
          Plan
        </button>
        <button
          type="button"
          onClick={onExecute}
          disabled={!ready}
          className="rounded-button border border-border-proof bg-accent-proof px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          Execute
        </button>
      </div>
      {!ready ? (
        <p className="mt-3 text-xs text-text-tertiary">
          Preencha chip + formula + world para executar.
        </p>
      ) : null}
    </div>
  );
}
