type StepWizardProps = {
  steps: string[];
  activeIndex: number;
  state: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
};

export default function StepWizard({
  steps,
  activeIndex,
  state,
  onNext,
  onBack
}: StepWizardProps) {
  return (
    <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
      <div className="flex flex-wrap gap-2">
        {steps.map((step, index) => (
          <span
            key={step}
            className={`rounded-pill border border-border-proof px-3 py-1 text-xs ${
              index === activeIndex ? "text-text-primary" : "text-text-tertiary"
            }`}
          >
            {step}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-text-secondary">
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">State</p>
        <pre className="mt-2 whitespace-pre-wrap text-xs text-text-secondary">
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-button border border-border-proof bg-accent-proof px-3 py-2 text-xs font-semibold text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
