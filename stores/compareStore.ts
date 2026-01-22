import { create } from "zustand";
import type { CidStr } from "@/lib/types";

export type CompareStore = {
  selectedReceiptCids: CidStr[];
  maxSelected: number;
  toggle: (receiptCid: CidStr) => void;
  clear: () => void;
};

export const useCompareStore = create<CompareStore>((set, get) => ({
  selectedReceiptCids: [],
  maxSelected: 4,
  toggle: (receiptCid) => {
    const current = get().selectedReceiptCids;
    const exists = current.includes(receiptCid);
    if (exists) {
      set({ selectedReceiptCids: current.filter((cid) => cid !== receiptCid) });
      return;
    }
    if (current.length >= get().maxSelected) {
      return;
    }
    set({ selectedReceiptCids: [...current, receiptCid] });
  },
  clear: () => set({ selectedReceiptCids: [] })
}));
