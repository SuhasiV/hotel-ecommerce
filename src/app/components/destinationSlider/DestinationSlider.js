"use client";
import styles from "@/app/components/destinationSlider/destinationSlider.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import DestinationSliderDate from "./DestinationSliderData";

const DestinationCard = ({ type }) => {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHotelData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/hotels?${type}=true`);
        const data = response?.data?.hotels;

        setHotel(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };
    getHotelData();
  }, [type, setHotel]);

  return (
    <div className={styles.container}>
      {error
        ? "Error loading data"
        : loading
          ? "Loading data..."
          : hotel && <DestinationSliderDate type={type} data={hotel} />}
    </div>
  );
};

export default DestinationCard;
