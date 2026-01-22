import FilterBar from "@/components/explore/FilterBar";
import ReceiptCard from "@/components/explore/ReceiptCard";

const mockReceipts = Array.from({ length: 6 }).map((_, index) => ({
  receiptCid: `b3:feedface00${index}aa1122334455667788` as const,
  vizUrl: null,
  blurhash: null,
  grade: index % 2 === 0 ? "A" : "B",
  verified: index % 2 === 0
}));

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <FilterBar
        filters={{ chip: "", world: "", grade: "", verified: "" }}
        onChange={() => undefined}
      />
      <div className="grid gap-grid-gap md:grid-cols-2 xl:grid-cols-3">
        {mockReceipts.map((receipt) => (
          <ReceiptCard
            key={receipt.receiptCid}
            receiptCid={receipt.receiptCid}
            vizUrl={receipt.vizUrl}
            blurhash={receipt.blurhash}
            badges={{ grade: receipt.grade, verified: receipt.verified }}
            onOpen={() => undefined}
            onCompare={() => undefined}
            onReplay={() => undefined}
            onFavorite={() => undefined}
          />
        ))}
      </div>
    </div>
  );
}
