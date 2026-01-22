export const formatMs = (value: number | null) => {
  if (value === null) {
    return "—";
  }
  return `${Math.round(value)} ms`;
};
