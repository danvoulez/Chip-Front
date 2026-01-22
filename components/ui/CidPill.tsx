import clsx from "clsx";
import type { CidStr } from "@/lib/types";
import { abbreviateCid } from "@/lib/utils/cid";
import Tooltip from "@/components/ui/Tooltip";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

type CidPillProps = {
  label: string;
  cid: CidStr;
  abbrChars?: number;
  variant?: "proof" | "verify" | "warn" | "fail";
  copy?: boolean;
};

const variantStyles: Record<NonNullable<CidPillProps["variant"]>, string> = {
  proof: "text-accent-proof",
  verify: "text-accent-verify",
  warn: "text-accent-warn",
  fail: "text-accent-fail"
};

export default function CidPill({
  label,
  cid,
  abbrChars = 7,
  variant = "proof",
  copy = true
}: CidPillProps) {
  const { copy: copyToClipboard } = useCopyToClipboard();
  const shortCid = abbreviateCid(cid, abbrChars);

  const pill = (
    <button
      type="button"
      aria-label={`${label} ${cid}`}
      onClick={() => copy && copyToClipboard(cid)}
      className={clsx(
        "cid-pill inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-semibold",
        "transition hover:bg-bg-surface-hover",
        variantStyles[variant],
        copy ? "cursor-pointer" : "cursor-default"
      )}
    >
      <span className="text-text-tertiary">{label}</span>
      <span data-mono>{shortCid}</span>
    </button>
  );

  return <Tooltip content={cid}>{pill}</Tooltip>;
}
