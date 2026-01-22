import { create } from "zustand";
import type { CandidateViewModel, CidStr } from "@/lib/types";

export type RunStore = {
  runId: string | null;
  runPlanCid: CidStr | null;
  selectedCandidateIndex: 0 | 1 | 2 | 3 | null;
  candidates: CandidateViewModel[];
  resetForNewRun: (candidates: CandidateViewModel[]) => void;
  selectCandidate: (index: 0 | 1 | 2 | 3) => void;
};

export const useRunStore = create<RunStore>((set) => ({
  runId: null,
  runPlanCid: null,
  selectedCandidateIndex: null,
  candidates: [],
  resetForNewRun: (candidates) => set({ candidates, runId: null, runPlanCid: null }),
  selectCandidate: (index) => set({ selectedCandidateIndex: index })
}));
