"use client";
import React from "react";
import styles from "@/app/styles/hotelGallery.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

const HotelGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.container}>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
        >
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/roomDeluxe.jpg" alt="roomDeluxe" fill={true} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HotelGallery;
