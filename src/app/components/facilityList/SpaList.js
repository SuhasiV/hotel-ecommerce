"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RestAndSpaCard from "../restAndSpaCard/RestAndSpaCard";

const SpaList = ({ spaId }) => {
  const [spa, setSpa] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const spaDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/spa?id=${spaId}`);
        const data = response?.data?.spa;

        setSpa(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    };
    spaDetail();
  }, [spaId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <RestAndSpaCard data={spa} />
    </div>
  );
};

export default SpaList;
