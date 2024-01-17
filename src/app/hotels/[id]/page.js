"use client";

import SingleHotelInfo from "@/app/components/SingleHotelInfo";
import React from "react";
import styles from "@/app/styles/singleHotel.module.css";
import BookingBox from "@/app/components/BookingBox";
import HotelGallery from "@/app/components/HotelGallery";
import Image from "next/image";
import WifiIcon from "@mui/icons-material/Wifi";
import GroupsIcon from "@mui/icons-material/Groups";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const page = ({ params }) => {
  const roomType3 = [
    {
      id: 1,
      name: "Classic Deluxe Room",
      price: "Rs. 3700",
      bed: "King-size bed",
      img: "/img/roomDeluxe.jpg",
      alt: "Classic Deluxe Room",
      people: "1-2 Persons",
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "Rs. 3300",
      bed: "Queen-size bed",
      img: "/img/roomExecutive.jpg",
      alt: "Executive Suite",
      people: "1-2 Persons",
    },
    {
      id: 3,
      name: "Grand Family Suite",
      price: "Rs. 5100",
      bed: "King+twin beds",
      img: "/img/roomFamily.jpg",
      alt: "Grand Family Suite",
      people: "3-4 Persons",
    },
  ];
  const roomType2 = [
    {
      id: 4,
      name: "Presidential Terrace Suite",
      price: "Rs. 12,000",
      bed: "King-size bed",
      img: "/img/roomTerrace.jpg",
      alt: "Presidential Terrace Suite",
      people: "1-2 Persons",
    },
    {
      id: 5,
      name: "Imperial Royal Suite",
      price: "Rs. 22,000",
      bed: " Emperor-size bed",
      img: "/img/roomRoyal.jpg",
      alt: "Imperial Royal Suite",
      people: "1-2 Persons",
    },
  ];

  const hotelId = params.id;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper1}>
          <div className={styles.left}>
            <HotelGallery />
            <SingleHotelInfo hotelId={hotelId} />
          </div>

          <div className={styles.right}>
            <BookingBox
              type="singleHotelPage"
              roomTypes={{ roomType2, roomType3 }}
            />
          </div>
        </div>
        <div className={styles.wrapper2}>
          <div className={styles.section}>
            <div className={styles.heading}>Room Types:</div>
            <div className={styles.roomSec1}>
              {roomType3.map((item) => (
                <div className={styles.box1} key={item.id}>
                  <div className={styles.image}>
                    <Image
                      src={item.img}
                      fill={true}
                      alt={item.alt}
                      className={styles.roomImage}
                    />
                  </div>
                  <div className={styles.roomBookNow}>Book Now</div>
                  <div className={styles.boxInfo}>
                    <div className={styles.boxHidden}>
                      <div className={styles.boxPrice}>
                        {item.price} <small>/ Night ({item.bed})</small>{" "}
                      </div>
                      <div className={styles.boxName}>{item.name}</div>
                      <div></div>
                      <div>
                        {" "}
                        <hr className={styles.roomHr} />
                      </div>

                      <div className={styles.roomList}>
                        {" "}
                        <div>
                          <WifiIcon />
                          Free Wifi
                        </div>
                        <div>
                          <GroupsIcon />
                          {item.people}
                        </div>
                        <div>
                          <ConnectedTvIcon />
                          Free Netflix
                        </div>
                        <div>
                          <RestaurantIcon />
                          Breakfast
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.roomSec1}>
              {roomType2.map((item) => (
                <div className={styles.box1} key={item.id}>
                  <div className={styles.image}>
                    <Image
                      src={item.img}
                      fill={true}
                      alt={item.alt}
                      className={styles.roomImage}
                    />
                  </div>
                  <div className={styles.roomBookNow}>Book Now</div>
                  <div className={styles.boxInfo}>
                    <div className={styles.boxHidden}>
                      <div className={styles.boxPrice}>
                        {item.price} <small>/ Night ({item.bed})</small>{" "}
                      </div>
                      <div className={styles.boxName}>{item.name}</div>
                      <div></div>
                      <div>
                        {" "}
                        <hr className={styles.roomHr} />
                      </div>

                      <div className={styles.roomList}>
                        {" "}
                        <div>
                          <WifiIcon />
                          Free Wifi
                        </div>
                        <div>
                          <GroupsIcon />
                          {item.people}
                        </div>
                        <div>
                          <ConnectedTvIcon />
                          Free Netflix
                        </div>
                        <div>
                          <RestaurantIcon />
                          Breakfast
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
