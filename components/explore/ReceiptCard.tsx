import type { CidStr, DeterminismGrade } from "@/lib/types";
import CidPill from "@/components/ui/CidPill";
import ReceiptViz from "@/components/ui/ReceiptViz";

export type ReceiptBadges = {
  grade: DeterminismGrade | null;
  verified: boolean | null;
};

type ReceiptCardProps = {
  receiptCid: CidStr;
  vizUrl: string | null;
  blurhash: string | null;
  badges: ReceiptBadges;
  onOpen: () => void;
  onCompare: () => void;
  onReplay: () => void;
  onFavorite: () => void;
};

export default function ReceiptCard({
  receiptCid,
  vizUrl,
  blurhash,
  badges,
  onOpen,
  onCompare,
  onReplay,
  onFavorite
}: ReceiptCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-border-proof bg-bg-surface p-card-padding shadow-surface">
      <ReceiptViz src={vizUrl} blurhash={blurhash} alt={`Receipt ${receiptCid}`} />
      <CidPill label="Receipt" cid={receiptCid} />
      <div className="flex flex-wrap gap-2 text-xs text-text-secondary">
        {badges.grade ? <span>Grade {badges.grade}</span> : null}
        {badges.verified ? <span className="text-accent-verify">Verified</span> : null}
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onOpen}
          className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
        >
          Open
        </button>
        <button
          type="button"
          onClick={onCompare}
          className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
        >
          Compare
        </button>
        <button
          type="button"
          onClick={onReplay}
          className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
        >
          Replay
        </button>
        <button
          type="button"
          onClick={onFavorite}
          className="rounded-button border border-border-proof px-3 py-2 text-xs text-text-secondary hover:bg-bg-surface-hover"
        >
          Favorite
        </button>
      </div>
    </div>
  );
}
