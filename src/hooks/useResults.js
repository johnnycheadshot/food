import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (submission) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: submission,
          location: "sarasota"
        }
      });

      // if (results[0].name === response.data.businesses[0].name)
      // console.log(response);

      setResults(response.data.businesses);
    } catch (err) {
      setErr("Something went wrong! :(");
      setTimeout(() => setErr(""), 2000);
    }
  };

  return [searchApi, results, err];
};

export default useResults;
