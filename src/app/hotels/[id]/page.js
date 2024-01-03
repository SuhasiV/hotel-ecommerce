"use client";

import React from "react";
import styles from "@/app/styles/singleHotel.module.css";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import WifiIcon from "@mui/icons-material/Wifi";
import GroupsIcon from "@mui/icons-material/Groups";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Image from "next/image";
import BookingBox from "@/app/components/BookingBox";
import HotelGallery from "@/app/components/HotelGallery";

const Page = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        <div className={styles.left}>
          <HotelGallery />
          <div className={styles.info}>
            <div className={styles.star}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.subTitle}>A Luxury Haven</div>
            <div className={styles.title}>Imperial Grand Palace</div>
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
              123 Regal Avenue, Metropolis City, Luxeland
            </div>
            <div className={styles.info}>
              Welcome to Imperial Grand Palace, our flagship hotel where luxury
              meets sophistication. Conveniently located in the heart of
              Metropolis City, our opulent establishment is a symbol of elegance
              and comfort.
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
  );
};

export default Page;
