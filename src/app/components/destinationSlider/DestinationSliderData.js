"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardType1 from "../cardType1/CardType1";
import styles from "@/app/components/destinationSlider/destinationSlider.module.scss";
import { useState } from "react";

const DestinationSliderDate = ({ type, data }) => {
  return (
    <div>
      <div className="heading">
        <div className="line"></div>
        <div className="title">
          <div className="title1">
            {type === "isFeatured"
              ? "Discover the Enchantment of Winter Wonderland"
              : "Popular Destinations"}
          </div>
          <div className="title2">
            {type === "isFeatured"
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
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.name}>
                <CardType1
                  city={item.city}
                  state={item.address[item.address.length - 2]}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationSliderDate;
