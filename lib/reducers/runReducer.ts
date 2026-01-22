import type { CandidateViewModel } from "@/lib/types";

type RunEvent = {
  event_cid: string;
  run_id: string;
  candidate_index: number | null;
  type: string;
  payload: Record<string, unknown>;
};

type RunState = {
  runId: string | null;
  candidates: CandidateViewModel[];
  seen: Set<string>;
};

export const initialRunState = (candidates: CandidateViewModel[]): RunState => ({
  runId: null,
  candidates,
  seen: new Set()
});

export const runReducer = (state: RunState, event: RunEvent): RunState => {
  if (state.seen.has(event.event_cid)) {
    return state;
  }

  const nextSeen = new Set(state.seen);
  nextSeen.add(event.event_cid);

  return {
    ...state,
    seen: nextSeen
  };
};
