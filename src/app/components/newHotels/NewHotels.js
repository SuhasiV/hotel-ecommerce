"use client";
import styles from "@/app/components/newHotels/newHotels.module.scss";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const NewHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNewHotels = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/hotels?isNew=true");
        const data = response?.data?.hotels;

        setHotels(data);
        setLoading(false);
      } catch (err) {
        console.log("Could not fetch new hotels", err);
      }
    };
    getNewHotels();
  }, []);

  return (
    <div className={styles.container}>
      <div className="heading">
        <div className="line"></div>
        <div className="title">
          <div className="title1">Explore the beauty of our New Hotels</div>
          <div className="title2">
            Experience luxury and comfort like never before
          </div>
        </div>
      </div>{" "}
      <div className={styles.slider}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {loading
            ? "Loading Data..."
            : hotels &&
              hotels.map((item) => (
                <SwiperSlide key={item.name}>
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
                      <div
                        className={styles.title}
                        style={{ letterSpacing: "3px" }}
                      >
                        INTRODUCING
                        <br />
                        <span className="title1">{item.name} </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "20px",
                        }}
                      >
                        <LocationOnIcon />
                        {item.address.join(", ")}
                        {}
                      </div>
                      <p>{item.desc}</p>
                      <button className="buttonBookNow">Book Now</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewHotels;
