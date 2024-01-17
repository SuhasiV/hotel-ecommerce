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

  const gymImagePath = hotel?.features?.gym?.available
    ? hotel.features.gym.imagePath
    : null;

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.star}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className={styles.subTitle}></div>
        <div className={styles.title}></div>
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
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Discover the Best of Luxury</div>
        <div className={styles.pointers}>
          <div className={styles.pointer}>
            <BrunchDiningIcon className={styles.icon} />
            <div className={styles.pointerTitle}>Exquisite Dining</div>
            <hr />
            <div className={styles.pointerInfo}>
              {" "}
              Diverse range of international and local cuisines
            </div>
          </div>
          <div className={styles.pointer}>
            {" "}
            <BrunchDiningIcon className={styles.icon} />
            <div className={styles.pointerTitle}>Luxurious Spa</div>
            <hr />
            <div className={styles.pointerInfo}>
              Spa with a range of therapeutic treatments
            </div>
          </div>
          <div className={styles.pointer}>
            {" "}
            <BrunchDiningIcon className={styles.icon} />
            <div className={styles.pointerTitle}>Fitness Center</div>
            <hr />
            <div className={styles.pointerInfo}>
              Stay fit with state-of-the-art fitness equipment
            </div>
          </div>
          <div className={styles.pointer}>
            {" "}
            <BrunchDiningIcon className={styles.icon} />
            <div className={styles.pointerTitle}> Services</div>
            <hr />
            <div className={styles.pointerInfo}>
              Prepared to help with transportation and local suggestions.
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={styles.section}>
        <div className={styles.heading}>Most Popular Facilities:</div>
        <div className={styles.facilitiesBox}>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> Wi-Fi</div>
          </div>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> Valet Parking</div>
          </div>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> 24/7 Room Service</div>
          </div>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> Bar</div>
          </div>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> Restraunt</div>
          </div>
          <div className={styles.facilitiesSection}>
            {" "}
            <BrunchDiningIcon className={styles.facilitiesIcon} />
            <div className={styles.facilitiesTitle}> Swimming Pool</div>
          </div>
        </div>{" "}
      </div>
      {gymImagePath && (
        <Image
          src={`/img/${gymImagePath}`}
          alt="Gym Image"
          height={50}
          width={50}
        />
      )}
    </div>
  );
};

export default SingleHotelInfo;
