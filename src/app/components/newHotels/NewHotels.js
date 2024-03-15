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
import Link from "next/link";

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
                    <div
                      className={styles.image}
                      style={{
                        background:
                          item && item.photos && item.photos.length > 0
                            ? `url(/${item.photos[0]})`
                            : "", // Check if spa and
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
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
                      <Link href={`/hotels/${item._id}`} className="link">
                        {" "}
                        <button className="buttonBookNow">Book Now</button>
                      </Link>
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
