"use client";
import { useEffect, useState } from "react";
import styles from "@/app/components/hotelsList/hotelsList.module.scss";
import axios from "axios";
import SearchItem from "../searchItem/SearchItem";
import { useSearchParams } from "next/navigation";

const SpasList = () => {
  const [spas, setSpas] = useState([]);

  useEffect(() => {
    const getSpas = async () => {
      try {
        const response = await axios.get(`/api/spa`);
        const data = response?.data?.spa;

        setSpas(data);
      } catch (err) {
        console.log("error fetching spas data", err);
      }
    };
    getSpas();
  }, []);
  return (
    <div
      className={styles.hotels}
      style={{ maxWidth: "80%", margin: "0px auto" }}
    >
      {spas.map((spa, index) => (
        <SearchItem key={`${spa.name}-${index}`} data={spa} />
      ))}
    </div>
  );
};

export default SpasList;
