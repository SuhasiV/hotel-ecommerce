"use client";
import { useEffect, useState } from "react";
import styles from "@/app/components/hotelsList/hotelsList.module.scss";
import axios from "axios";
import SearchItem from "../searchItem/SearchItem";
import { useSearchParams } from "next/navigation";

const RestList = () => {
  const [rest, setRest] = useState([]);

  useEffect(() => {
    const getRests = async () => {
      try {
        const response = await axios.get(`/api/restraunt`);
        const data = response?.data?.restraunt;

        setRest(data);
      } catch (err) {
        console.log("error fetching rests data", err);
      }
    };
    getRests();
  }, []);

  return (
    <div
      className={styles.hotels}
      style={{ maxWidth: "80%", margin: "0px auto" }}
    >
      {rest?.map((rest, index) => (
        <SearchItem key={`${rest.name}-${index}`} data={rest} />
      ))}
    </div>
  );
};

export default RestList;
