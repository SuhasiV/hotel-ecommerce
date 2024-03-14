"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RestAndSpaCard from "../restAndSpaCard/RestAndSpaCard";

const RestList = ({ restId }) => {
  const [rest, setRest] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const restDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/restraunt?id=${restId}`);
        const data = response?.data?.rest;
        setRest(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    };
    restDetail();
  }, [restId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <RestAndSpaCard data={rest} />
    </div>
  );
};

export default RestList;
