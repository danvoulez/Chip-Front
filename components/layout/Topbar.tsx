import CidPill from "@/components/ui/CidPill";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-border-proof bg-bg-surface px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary">Creative OS</p>
        <h1 className="text-lg font-semibold">Showroom verificável</h1>
      </div>
      <CidPill label="Run" cid="b3:9a1fda9e4b2c7d2a1b88c0ad1c98b37c" />
    </header>
  );
}
