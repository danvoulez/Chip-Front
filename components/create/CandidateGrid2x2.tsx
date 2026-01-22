import type { CandidateViewModel } from "@/lib/types";
import CandidateCard from "@/components/create/CandidateCard";

type CandidateGrid2x2Props = {
  candidates: CandidateViewModel[];
};

export default function CandidateGrid2x2({ candidates }: CandidateGrid2x2Props) {
  return (
    <div className="grid gap-grid-gap lg:grid-cols-2">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.index}
          candidate={candidate}
          onOpenReceipt={() => undefined}
          onToggleCompare={() => undefined}
          onVary={() => undefined}
        />
      ))}
    </div>
  );
}
