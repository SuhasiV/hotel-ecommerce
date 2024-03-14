"use client";
import { useEffect, useState } from "react";
import styles from "@/app/components/hotelsList/hotelsList.module.scss";
import axios from "axios";
import SearchItem from "../searchItem/SearchItem";
import { useSearchParams } from "next/navigation";

const HotelsList = () => {
  const searchParams = useSearchParams();

  const dest = searchParams.get("dest") ?? null;
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const url = dest === null || dest === "" ? "" : `?dest=${dest}`;

        const response = await axios.get(`/api/hotels${url}`);
        const data = response?.data?.hotels;

        setHotels(data);
      } catch (err) {
        console.log("error fetching hotels data", err);
      }
    };
    getHotels();
  }, [dest]);

  return (
    <div className={styles.hotels}>
      {hotels.map((hotel, index) => (
        <SearchItem key={`${hotel.name}-${index}`} data={hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
