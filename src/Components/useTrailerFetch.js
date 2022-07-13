import { useState, useEffect, useCallback } from "react";

export const useTrailerFetch = (trailerUrl) => {
  const [loadingTrailer, setLoadingTrailer] = useState(true);
  const [trailer, setTrailer] = useState([]);

  const getTrailer = useCallback(async () => {
    try {
      const response = await fetch(trailerUrl);
      const trailer = await response.json();
      setTrailer(trailer.results[2]);
      setLoadingTrailer(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [trailerUrl]);

  useEffect(() => {
    getTrailer();
  }, [trailerUrl, getTrailer]);
  return { loadingTrailer, trailer };
};
