import MetricDeltasTable from "@/components/compare/MetricDeltasTable";
import OutputDiff from "@/components/compare/OutputDiff";
import type { ReceiptExpanded } from "@/lib/types";

const left: ReceiptExpanded = {
  receipt_cid: "b3:aaaabbbbccccdddd1111222233334444",
  run_id: "run-left",
  candidate_index: 0,
  chip_cid: "b3:chipleft1111222233334444",
  formula_cid: "b3:formulaleft1111222233334444",
  world_id: "world:axiom",
  world_manifest_cid: "b3:worldmanifestleft",
  inputs_cid: "b3:inputsleft",
  outputs_cid: "b3:outputsleft",
  telemetry_cid: "b3:telemetryleft",
  proof_bundle_cid: null,
  signature: null,
  determinism_grade: "A",
  metrics: {
    runtime_ms: 980,
    peak_ram_mb: 512,
    cost_credits: 32,
    io_bytes: null
  }
};

const right: ReceiptExpanded = {
  receipt_cid: "b3:eeeeffff000011112222333344445555",
  run_id: "run-right",
  candidate_index: 1,
  chip_cid: "b3:chipright1111222233334444",
  formula_cid: "b3:formularight1111222233334444",
  world_id: "world:axiom",
  world_manifest_cid: "b3:worldmanifestright",
  inputs_cid: "b3:inputsright",
  outputs_cid: "b3:outputsright",
  telemetry_cid: "b3:telemetryright",
  proof_bundle_cid: null,
  signature: null,
  determinism_grade: "B",
  metrics: {
    runtime_ms: 1040,
    peak_ram_mb: 640,
    cost_credits: 40,
    io_bytes: null
  }
};

export default function ComparePage() {
  return (
    <div className="space-y-6">
      <MetricDeltasTable left={left} right={right} />
      <OutputDiff left={left} right={right} mode="side_by_side" />
    </div>
  );
}
