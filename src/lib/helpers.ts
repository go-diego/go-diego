export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // @ts-ignore
    error.info = await res.json();
    // @ts-ignore
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const Exception = (message: string, info?: any) => {
  const error = new Error(message);
  // @ts-ignore
  error.info = info;
  throw error;
};
