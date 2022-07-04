import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setLoading(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
};
