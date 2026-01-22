import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api/client";

export const useReceipt = (receiptCid: string) => {
  return useQuery({
    queryKey: ["receipt", receiptCid],
    queryFn: () => apiGet(`/api/receipts/${receiptCid}`),
    staleTime: 60 * 60 * 1000
  });
};
