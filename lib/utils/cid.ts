import type { CidStr } from "@/lib/types";

export const abbreviateCid = (cid: CidStr, chars = 7) => {
  if (cid.length <= chars * 2 + 3) {
    return cid;
  }
  return `${cid.slice(0, chars + 3)}…${cid.slice(-chars)}`;
};
