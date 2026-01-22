import { useEffect } from "react";
import { createEventSource } from "@/lib/realtime/sse";

export type RunEvent = {
  event_cid: string;
  ts_ms: number;
  run_id: string;
  candidate_index: number | null;
  type: string;
  payload: Record<string, unknown>;
};

type UseSseRunEventsProps = {
  runId: string | null;
  onEvent: (event: RunEvent) => void;
};

export const useSseRunEvents = ({ runId, onEvent }: UseSseRunEventsProps) => {
  useEffect(() => {
    if (!runId) {
      return;
    }

    const source = createEventSource(`/api/runs/${runId}/events`);

    const handler = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as RunEvent;
      onEvent(data);
    };

    source.addEventListener("message", handler);

    return () => {
      source.removeEventListener("message", handler);
      source.close();
    };
  }, [runId, onEvent]);
};
