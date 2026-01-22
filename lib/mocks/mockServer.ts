export const isMocksEnabled = () => {
  return process.env.NEXT_PUBLIC_USE_MOCKS === "true";
};
