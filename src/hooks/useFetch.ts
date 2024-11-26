import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T>(url: string) => {
  const [stateFetching, setStateFetching] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setStateFetching({
          data: json,
          loading: false,
          error: null,
        });
      } catch (error) {
        setStateFetching({
          data: null,
          loading: false,
          error: error as Error,
        });
      }
    };

    fetchData();
  }, [url]);

  return stateFetching;
};
