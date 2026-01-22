import clsx from "clsx";

type InspectorDrawerProps = {
  open: boolean;
  tabs: string[];
  activeTab: string;
  onClose: () => void;
  onTab: (tab: string) => void;
};

export default function InspectorDrawer({
  open,
  tabs,
  activeTab,
  onClose,
  onTab
}: InspectorDrawerProps) {
  return (
    <div
      className={clsx(
        "fixed right-0 top-0 z-40 h-full w-[360px] border-l border-border-proof bg-bg-surface/80 backdrop-blur-lg transition-transform",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b border-border-proof px-4 py-4">
        <h2 className="text-sm uppercase tracking-[0.3em] text-text-tertiary">Inspector</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-button border border-border-proof px-3 py-1 text-xs text-text-secondary"
        >
          Fechar
        </button>
      </div>
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTab(tab)}
            className={clsx(
              "rounded-pill border border-border-proof px-3 py-1 text-xs",
              activeTab === tab
                ? "text-text-primary"
                : "text-text-tertiary hover:text-text-secondary"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="px-4 text-sm text-text-secondary">Selecione um recibo para inspecionar.</div>
    </div>
  );
}
