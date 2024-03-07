"use client";
import { useEffect, useState } from "react";
import styles from "@/app/components/hotelsList/hotelsList.module.scss";
import axios from "axios";
import SearchItem from "../searchItem/SearchItem";
import { useSearchParams } from "next/navigation";

const HotelsList = () => {
  const searchParams = useSearchParams();

  const dest = searchParams.get("dest") ?? null;
  const startD = searchParams.get("startDate");
  const endD = searchParams.get("endDate");
  const room = searchParams.get("room") ?? "1";

  const startDate = startD ? new Date(startD) : new Date();
  const endDate = endD ? new Date(endD) : null;

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await axios.get("/api/hotels");
        const data = response?.data?.hotels;

        setHotels(data);
      } catch (err) {
        console.log("error fetching hotels data", err);
      }
    };
    getHotels();
  }, []);

  //const data = [
  //   {
  //     name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
  //     review: "5",
  //     desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
  //     price: "4500",
  //     img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
  //     available: false,
  //   },
  //   {
  //     name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
  //     review: "5",
  //     desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
  //     price: "4500",
  //     img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
  //     available: true,
  //   },
  //   {
  //     name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
  //     review: "5",
  //     desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
  //     price: "4500",
  //     img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
  //     available: true,
  //   },
  //   {
  //     name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
  //     review: "5",
  //     desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
  //     price: "4500",
  //     img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
  //     available: false,
  //   },
  // ];

  return (
    <div className={styles.hotels}>
      {hotels.map((hotel, index) => (
        <SearchItem key={`${hotel.name}-${index}`} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
