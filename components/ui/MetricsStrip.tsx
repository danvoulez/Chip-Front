import clsx from "clsx";

type MetricItem = {
  label: string;
  value: string;
  unit?: string;
  emphasis?: boolean;
};

type MetricsStripProps = {
  items: MetricItem[];
  layout?: "row" | "grid";
};

export default function MetricsStrip({ items, layout = "row" }: MetricsStripProps) {
  return (
    <div
      className={clsx(
        "rounded-card border border-border-proof bg-bg-surface p-card-padding",
        layout === "row" ? "flex flex-wrap gap-6" : "grid gap-4 sm:grid-cols-2"
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-text-tertiary">
            {item.label}
          </span>
          <span
            className={clsx(
              "mt-1 text-lg font-semibold",
              item.emphasis ? "text-accent-verify" : "text-text-primary"
            )}
          >
            {item.value}
            {item.unit ? <span className="text-text-tertiary"> {item.unit}</span> : null}
          </span>
        </div>
      ))}
    </div>
  );
}
