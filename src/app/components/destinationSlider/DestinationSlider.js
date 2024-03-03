"use client";
import styles from "@/app/components/destinationSlider/destinationSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardType1 from "../cardType1/CardType1";
import { useEffect, useState } from "react";

const winterDest = [
  { city: "Leh ", state: " Union Territory of Ladakh" },
  { city: "Shimla ", state: "Himachal Pradesh" },
  { city: "Manali ", state: "Himachal Pradesh" },
  { city: "Nainital ", state: "Uttarakhand" },
  { city: "Mount Abu", state: "Rajasthan" },
];

const popularDest = [
  { city: "Jaipur", state: "Rajasthan" },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Delhi", state: "Delhi" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Kolkata", state: "West Bengal" },
];

const DestinationCard = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === "cold_destination") {
      setData(winterDest);
    }
    if (type === "popular_destination") {
      setData(popularDest);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className="heading">
        <div className="line"></div>
        <div className="title">
          <div className="title1">
            {type === "cold_destination"
              ? "Discover the Enchantment of Winter Wonderland"
              : "Popular Destinations"}
          </div>
          <div className="title2">
            {type === "cold_destination"
              ? "Escape to Our Charming Hotels in India's Frosty Retreats"
              : "Discover our most popular places among out beloved visitors."}
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
        >
          {data.map((dest, index) => (
            <SwiperSlide key={index}>
              <CardType1 city={dest.city} state={dest.state} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationCard;
