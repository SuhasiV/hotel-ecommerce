"use client";

import styles from "@/app/components/roomCard/roomCard.module.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BedIcon from "@mui/icons-material/Bed";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const RoomCard = ({ data }) => {
  const images = data.img;
  const newImages = [];
  for (var i = 0; i < images.length; i++) {
    newImages.push({ imgName: images[i], imgIndex: images[i] + i });
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.left}
        style={{ background: `url(/${data.img[0]})` }}
      ></div>
      <div className={styles.right}>
        <div className="title1" style={{ fontSize: "25px" }}>
          {data.name}
        </div>
        <div className={styles.desc}>
          <ul>
            <li>
              <PeopleAltIcon />
              {data.people} People <small>/room</small>
            </li>
            <li>
              <BedIcon />
              {data.bed} Bed
            </li>
            <li>
              <CleaningServicesIcon />
              24/7 Room Service
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.price}>
          {data.available == true ? (
            <div>
              <span style={{ fontWeight: "700", fontSize: "22px" }}>
                {data.price}
              </span>
              /night <small>(incl GST)</small>
              <button className={styles.button}>View Other Dates</button>
              <button className={styles.button}>Book Now</button>
            </div>
          ) : (
            <div>
              <span>Sold Out</span>

              <button className={styles.button}>View Other Dates</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
