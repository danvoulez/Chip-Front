import type { CandidateViewModel } from "@/lib/types";

export const seedCandidates = (): CandidateViewModel[] => [
  {
    index: 0,
    status: "running",
    receipt_cid: null,
    receipt_viz_url: null,
    blurhash: null,
    determinism_grade: null,
    metrics: {
      runtime_ms: 1200,
      peak_ram_mb: 512,
      cost_credits: 32
    },
    progress_lines: ["Initializing runtime…", "Executing chip…"]
  },
  {
    index: 1,
    status: "done",
    receipt_cid: "b3:7f1aa3c49e5b11223344556677889900" as const,
    receipt_viz_url: null,
    blurhash: null,
    determinism_grade: "A",
    metrics: {
      runtime_ms: 980,
      peak_ram_mb: 480,
      cost_credits: 28
    },
    progress_lines: ["Initializing runtime…", "Collecting outputs…"]
  },
  {
    index: 2,
    status: "failed",
    receipt_cid: null,
    receipt_viz_url: null,
    blurhash: null,
    determinism_grade: null,
    metrics: {
      runtime_ms: null,
      peak_ram_mb: null,
      cost_credits: null
    },
    progress_lines: ["Initializing runtime…", "Failure: EXEC_TIMEOUT"]
  },
  {
    index: 3,
    status: "queued",
    receipt_cid: null,
    receipt_viz_url: null,
    blurhash: null,
    determinism_grade: null,
    metrics: {
      runtime_ms: null,
      peak_ram_mb: null,
      cost_credits: null
    },
    progress_lines: ["Queued for execution…"]
  }
];
