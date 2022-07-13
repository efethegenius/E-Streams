import { useState, useEffect, useCallback } from "react";

export const useTvTrailerFetch = (tvTrailerUrl) => {
  const [loadingTvTrailer, setLoadingTvTrailer] = useState(true);
  const [tvTrailer, setTvTrailer] = useState([]);

  const getTrailer = useCallback(async () => {
    try {
      const response = await fetch(tvTrailerUrl);
      const tvTrailer = await response.json();
      setTvTrailer(tvTrailer.results[0]);
      setLoadingTvTrailer(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [tvTrailerUrl]);

  useEffect(() => {
    getTrailer();
  }, [tvTrailerUrl, getTrailer]);
  return { loadingTvTrailer, tvTrailer };
};
