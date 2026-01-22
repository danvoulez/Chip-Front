import Link from "next/link";

export default function HomePage() {
  return (
    <div className="rounded-panel border border-border-proof bg-bg-surface p-panel-padding">
      <h2 className="text-lg font-semibold">Chip Registry Creative OS</h2>
      <p className="mt-2 text-sm text-text-secondary">
        Selecione um workspace para começar.
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          href="/create"
          className="rounded-button border border-border-proof px-4 py-2 text-sm text-text-secondary hover:bg-bg-surface-hover"
        >
          Create
        </Link>
        <Link
          href="/explore"
          className="rounded-button border border-border-proof px-4 py-2 text-sm text-text-secondary hover:bg-bg-surface-hover"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
