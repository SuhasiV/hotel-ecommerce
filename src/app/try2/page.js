"use client";

import { useState } from "react";
import styles from "@/app/styles/try2.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { images } from "@/app/lib/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.left}>
          left
          <div>
            <Swiper
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
              {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={550}
                      height={400}
                      className={styles.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Thumbnail */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.mySwiper}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <button className="">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={50}
                      className=""
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Imperial Hotel</div>
        </div>
      </div>
    </div>
  );
}
