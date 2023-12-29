"use client";
import styles from "@/app/styles/try.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const Page = () => {
  const imgData = [
    { src: "/img/try_img2.jpg", alt: "Hotel Image" },
    { src: "/img/try_img.jpg", alt: "Hotel Image 2" },
    { src: "/img/img_1.jpg", alt: "Hotel Image" },
    { src: "/img/img_3.jpg", alt: "Hotel Image 2" },
    { src: "/img/img_4.jpg", alt: "Hotel Image" },
    { src: "/img/img_5.jpg", alt: "Hotel Image 2" },
    { src: "/img/img_6.jpg", alt: "Hotel Image 2" },
    { src: "/img/img_1.jpg", alt: "Hotel Image 2" },
    { src: "/img/img_3.jpg", alt: "Hotel Image 2" },
  ];
  return (
    <div className={styles.container}>
      <center>
        <h1>Try page</h1>
        <>
          {" "}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src={imgData[0].src}
                height={400}
                width={300}
                alt={imgData[0].alt}
                className={styles.image}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[1].src}
                height={400}
                width={300}
                alt={imgData[1].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[2].src}
                height={400}
                width={300}
                alt={imgData[2].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[3].src}
                height={400}
                width={300}
                alt={imgData[3].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[4].src}
                height={400}
                width={300}
                alt={imgData[4].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[5].src}
                height={400}
                width={300}
                alt={imgData[5].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[6].src}
                height={400}
                width={300}
                alt={imgData[6].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[7].src}
                height={400}
                width={300}
                alt={imgData[7].alt}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                className={styles.image}
                src={imgData[8].src}
                height={400}
                width={300}
                alt={imgData[8].alt}
              />
            </SwiperSlide>
          </Swiper>
        </>
      </center>
    </div>
  );
};

export default Page;
