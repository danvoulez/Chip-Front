import { useCallback, useState } from "react";

export type CopyState = "idle" | "success" | "error";

export const useCopyToClipboard = () => {
  const [state, setState] = useState<CopyState>("idle");

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setState("success");
    } catch (error) {
      setState("error");
    }
  }, []);

  return { copy, state };
};
