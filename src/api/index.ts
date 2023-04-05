import { useEffect, useState } from "react";
import axios from "axios";
import { Resource } from "../types";

const useApi = (type: Resource) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState();

  const getResource = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`data/${type}.json`);
      setData(data);
    } catch (err: any) {
      setErr(err);
      throw new Error("Interface request error", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, isLoading, err];
};

export default useApi;
