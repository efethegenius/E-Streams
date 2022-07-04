import { useState, useEffect, useCallback } from "react";

export const useDetailsFetch = (detailUrl) => {
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [details, setDetails] = useState([]);

  const getDetails = useCallback(async () => {
    try {
      const response = await fetch(detailUrl);
      const details = await response.json();
      setDetails(details);
      setLoadingDetails(false);
    } catch (error) {
      console.log("Could not fetch data, check network");
    }
  }, [detailUrl]);

  useEffect(() => {
    getDetails();
  }, [detailUrl, getDetails]);
  return { loadingDetails, details };
};
