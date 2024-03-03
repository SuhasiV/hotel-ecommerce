"use client";
import styles from "@/app/components/newHotels/newHotels.module.scss";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const NewHotels = () => {
  return (
    <div className={styles.container}>
      <div className="heading">
        <div className="line"></div>
        <div className="title">
          <div className="title1">Welcome to New Hotels</div>
          <div className="title2">
            Experience luxury and comfort like never before
          </div>
        </div>
      </div>{" "}
      <div className={styles.slider}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.image}>
                <div className={styles.img1}>
                  <Image
                    src="/hotel1.jpg"
                    alt="hotel1"
                    width="100"
                    height="100"
                  />
                </div>
                <div className={styles.img2}>
                  {" "}
                  <Image
                    src="/hotel2.jpg"
                    alt="hotel2"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.title}>
                  Introducing Nature&apos;s Haven:
                  <br />
                  <span className="title1">A Serene Retreat </span>
                </div>
                <p>
                  Discover tranquility and elegance at Nature&apos;s Haven, the
                  latest addition to the Imperial Hotels Group. Nestled amidst
                  breathtaking natural landscapes, our new hotel offers a
                  harmonious blend of luxury and sustainability. Immerse
                  yourself in the beauty of nature while indulging in
                  unparalleled comfort and personalized service. Experience a
                  stay like no other, where every detail is inspired by the
                  awe-inspiring wonders of the natural world.
                </p>
                <button className="buttonBookNow">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.image}>
                <div className={styles.img1}>
                  <Image
                    src="/hotel1.jpg"
                    alt="hotel1"
                    width="100"
                    height="100"
                  />
                </div>
                <div className={styles.img2}>
                  {" "}
                  <Image
                    src="/hotel2.jpg"
                    alt="hotel2"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.title}>
                  Introducing Nature&apos;s Haven:
                  <br />
                  <span className="title1">A Serene Retreat 2 </span>
                </div>
                <p>
                  Discover tranquility and elegance at Nature&apos;s Haven, the
                  latest addition to the Imperial Hotels Group. Nestled amidst
                  breathtaking natural landscapes, our new hotel offers a
                  harmonious blend of luxury and sustainability. Immerse
                  yourself in the beauty of nature while indulging in
                  unparalleled comfort and personalized service. Experience a
                  stay like no other, where every detail is inspired by the
                  awe-inspiring wonders of the natural world.
                </p>
                <button className="buttonBookNow">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewHotels;
