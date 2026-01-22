import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api/client";

export const useExplore = (filters: Record<string, string>, cursor: string | null) => {
  const params = new URLSearchParams({ ...filters });
  if (cursor) {
    params.set("cursor", cursor);
  }
  return useQuery({
    queryKey: ["explore", filters, cursor],
    queryFn: () => apiGet(`/api/explore?${params.toString()}`),
    staleTime: 15 * 1000
  });
};
