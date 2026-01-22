import Omnibox from "@/components/create/Omnibox";
import CandidateGrid2x2 from "@/components/create/CandidateGrid2x2";
import { seedCandidates } from "@/lib/mocks/seed";

export default function CreatePage() {
  const candidates = seedCandidates();

  return (
    <div className="space-y-6">
      <Omnibox
        chipRef="chip:gamma-7"
        formulaRef="b3:2c981f3da54d8fae98a881dfc0e1a54a"
        worldId="world:axiom"
        mode="fast"
        theme="dark"
        onPlan={() => undefined}
        onExecute={() => undefined}
      />
      <CandidateGrid2x2 candidates={candidates} />
    </div>
  );
}
