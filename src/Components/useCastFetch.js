import { useState, useEffect, useCallback } from "react";

export const useCastFetch = (castUrl) => {
  const [loadingCast, setLoadingCast] = useState(true);
  const [cast, setCast] = useState([]);

  const getCast = useCallback(async () => {
    try {
      const response = await fetch(castUrl);
      const cast = await response.json();
      setCast(cast.cast);
      setLoadingCast(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [castUrl]);

  useEffect(() => {
    getCast();
  }, [castUrl, getCast]);
  return { loadingCast, cast };
};
