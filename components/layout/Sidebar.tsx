import Link from "next/link";

const items = [
  { label: "Create", route: "/create" },
  { label: "Explore", route: "/explore" },
  { label: "Compare", route: "/compare" },
  { label: "Mint", route: "/mint" },
  { label: "Status", route: "/status" },
  { label: "Updates", route: "/updates" }
];

export default function Sidebar() {
  return (
    <aside className="w-60 border-r border-border-proof bg-bg-surface px-sidebar-padding py-6">
      <div className="mb-6 text-xs uppercase tracking-[0.3em] text-text-tertiary">
        Chip Registry
      </div>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            className="rounded-button px-3 py-2 text-sm text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
