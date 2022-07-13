import { useState, useEffect, useCallback } from "react";

export const useSerieFetch = (sDetailUrl) => {
  const [sLoadingDetails, setLoadingDetails] = useState(true);
  const [sDetails, setDetails] = useState([]);

  const getDetails = useCallback(async () => {
    try {
      const response = await fetch(sDetailUrl);
      const details = await response.json();
      setDetails(details);
      setLoadingDetails(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [sDetailUrl]);

  useEffect(() => {
    getDetails();
  }, [sDetailUrl, getDetails]);
  return { sLoadingDetails, sDetails };
};
