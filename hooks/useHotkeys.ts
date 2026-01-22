import { useEffect } from "react";

type Hotkey = {
  keys: string[];
  action: () => void;
};

export const useHotkeys = (bindings: Hotkey[]) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      bindings.forEach((binding) => {
        if (binding.keys.length === 1 && event.key === binding.keys[0]) {
          binding.action();
        }
      });
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [bindings]);
};
