export type CidStr = `b3:${string}`;
export type DidStr = `did:${string}`;
export type RunId = string;
export type WorldId = string;
export type AliasStr = string;
export type TraceId = string;

export type CandidateStatus = "idle" | "queued" | "running" | "done" | "failed";
export type RunStatus = "created" | "executing" | "complete" | "failed";
export type DeterminismGrade = "A" | "B" | "C";

export type CanonDoc = {
  cid: CidStr;
  canon_bytes_b64: string;
  mime?: string;
};

export type ReceiptExpanded = {
  receipt_cid: CidStr;
  run_id: RunId;
  candidate_index: 0 | 1 | 2 | 3;
  chip_cid: CidStr;
  formula_cid: CidStr;
  world_id: WorldId;
  world_manifest_cid: CidStr;
  inputs_cid: CidStr;
  outputs_cid: CidStr;
  telemetry_cid: CidStr;
  proof_bundle_cid: CidStr | null;
  signature: Record<string, unknown> | null;
  determinism_grade: DeterminismGrade;
  metrics: {
    runtime_ms: number;
    peak_ram_mb: number;
    cost_credits: number;
    io_bytes: number | null;
  };
};

export type CandidateViewModel = {
  index: 0 | 1 | 2 | 3;
  status: CandidateStatus;
  receipt_cid: CidStr | null;
  receipt_viz_url: string | null;
  blurhash: string | null;
  determinism_grade: DeterminismGrade | null;
  metrics: {
    runtime_ms: number | null;
    peak_ram_mb: number | null;
    cost_credits: number | null;
  };
  progress_lines: string[];
};
