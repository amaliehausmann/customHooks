import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(url);
      let fetchedData = await res.json();

      setData(fetchedData);
    }

    getData();
  }, [url]);

  return {data};
}
