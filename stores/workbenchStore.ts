import { create } from "zustand";
import type { CanonDoc, CidStr } from "@/lib/types";

export type WorkbenchStore = {
  ctxPresets: CanonDoc[];
  knobPresets: CanonDoc[];
  artifactRefs: CidStr[];
  pinnedReceipts: CidStr[];
  addCtxPreset: (doc: CanonDoc) => void;
  addKnobPreset: (doc: CanonDoc) => void;
  pinReceipt: (cid: CidStr) => void;
  unpinReceipt: (cid: CidStr) => void;
};

export const useWorkbenchStore = create<WorkbenchStore>((set, get) => ({
  ctxPresets: [],
  knobPresets: [],
  artifactRefs: [],
  pinnedReceipts: [],
  addCtxPreset: (doc) => set({ ctxPresets: [...get().ctxPresets, doc] }),
  addKnobPreset: (doc) => set({ knobPresets: [...get().knobPresets, doc] }),
  pinReceipt: (cid) => set({ pinnedReceipts: [...get().pinnedReceipts, cid] }),
  unpinReceipt: (cid) =>
    set({ pinnedReceipts: get().pinnedReceipts.filter((item) => item !== cid) })
}));
