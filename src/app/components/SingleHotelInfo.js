"use client";
import axios from "axios";
import Image from "next/image";
import styles from "@/app/styles/singleHotel.module.css";
import React, { useEffect, useState } from "react";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SingleHotelInfo = ({ hotelId }) => {
  const [hotel, setHotel] = useState();

  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await axios.get(`/api/hotels/${hotelId}`);
        setHotel(response.data.hotel);
      } catch (err) {
        console.error("Error fetching hotel data by id", err);
      }
    };

    getHotel();
  }, [hotelId]);

  const gym = hotel?.features?.gym?.available
    ? hotel.features.gym.imagePath
    : null;
  const pool = hotel?.features?.pool?.available
    ? hotel.features.pool.imagePath
    : null;
  const breakfast = hotel?.features?.breakfast?.available
    ? hotel.features.breakfast.imagePath
    : null;
  const couplefriendly = hotel?.features?.couplefriendly?.available
    ? hotel.features.couplefriendly.imagePath
    : null;
  const wifi = hotel?.features?.wifi?.available
    ? hotel.features.wifi.imagePath
    : null;
  const bar = hotel?.features?.bar?.available
    ? hotel.features.bar.imagePath
    : null;

  const hotelName = hotel?.name ? hotel.name : "no name";

  const hotelAddress = hotel?.address ? hotel.address : "no address";

  const desc = hotel?.desc ? hotel.desc : "no desc";

  const ratingNo = hotel?.rating ? hotel.rating : "no rating";
  const rating = Array.from({ length: ratingNo });

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.rating}>
          {rating.map((index) => (
            <div key={index} className={styles.star}>
              {" "}
              <StarIcon />
            </div>
          ))}
        </div>

        <div className={styles.subTitle}></div>
        <div className={styles.title}>{hotelName}</div>
        <hr
          className={styles.roomHr}
          style={{
            height: "4px",
            color: "#333",
            background: "#333",
            width: "70px",
            marginBottom: "30px",
          }}
        />
        <div className={styles.address}>
          <LocationOnIcon className={styles.locIcon} />
          {hotelAddress}
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.section}></div>{" "}
      <div className={styles.section}>
        <div className={styles.heading}>Most Popular Facilities:</div>
        <div className={styles.facilitiesBox}>
          {gym && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${gym}`}
                alt="Gym Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Gym</div>
            </div>
          )}
          {pool && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${pool}`}
                alt="pool Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Pool</div>
            </div>
          )}
          {bar && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${bar}`}
                alt="bar Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Bar</div>
            </div>
          )}
          {couplefriendly && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${couplefriendly}`}
                alt="couplefriendly Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Couple Friendly</div>
            </div>
          )}
          {wifi && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${wifi}`}
                alt="wifi Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Wi-Fi</div>
            </div>
          )}
          {breakfast && (
            <div className={styles.facilitiesSection}>
              <Image
                src={`/img/${breakfast}`}
                alt="breakfast Image"
                height={40}
                width={40}
              />
              <div className={styles.facilitiesTitle}> Breakfast </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleHotelInfo;
