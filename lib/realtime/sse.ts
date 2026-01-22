export const createEventSource = (url: string) => {
  return new EventSource(url);
};
