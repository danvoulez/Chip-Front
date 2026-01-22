type FilterBarProps = {
  filters: Record<string, string>;
  onChange: (filters: Record<string, string>) => void;
};

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
      {Object.entries(filters).map(([key, value]) => (
        <label key={key} className="flex flex-col text-xs text-text-tertiary">
          {key}
          <input
            value={value}
            onChange={(event) => onChange({ ...filters, [key]: event.target.value })}
            className="mt-1 rounded-button border border-border-proof bg-bg-canvas px-3 py-2 text-sm text-text-primary"
          />
        </label>
      ))}
    </div>
  );
}
