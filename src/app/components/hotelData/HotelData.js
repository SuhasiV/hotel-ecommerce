"use client";

import BookRoom from "@/app/components/bookRoom/BookRoom";
import RoomCard from "../roomCard/RoomCard";
import WifiIcon from "@mui/icons-material/Wifi";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import WineBarIcon from "@mui/icons-material/WineBar";
import styles from "@/app/components/hotelData/hotelData.module.scss";
import axios from "axios";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { GiComb } from "react-icons/gi";
import { useEffect, useState } from "react";
import SpaList from "../facilityList/SpaList";
import RestList from "../facilityList/RestList";

const HotelData = (params) => {
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getHotelData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/hotels/${params.id}`);
        const data = response?.data?.hotel;
        setHotel(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        console.log("Error fetching single hotel data", err.message);
      }
    };
    getHotelData();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const inRoomAmenities = [
    {
      icon: WifiIcon,
      name: "High Speed Wifi",
      available: hotel?.inRoomAmenities?.wifi,
    },
    {
      icon: CoffeeMakerIcon,
      name: "Espresso Machine",
      available: hotel?.inRoomAmenities?.espressoMachine,
    },
    {
      icon: WineBarIcon,
      name: "Mini Bar Fridge",
      available: hotel?.inRoomAmenities?.miniBar,
    },
    {
      icon: LockOpenIcon,
      name: "In Room Safe",
      available: hotel?.inRoomAmenities?.safe,
    },
    {
      icon: RoomServiceIcon,
      name: "24/7 Room Service",
      available: hotel?.inRoomAmenities?.service,
    },
    {
      icon: GiComb,
      name: "Essential Care",
      available: hotel?.inRoomAmenities?.care,
    },
  ];

  return (
    <div className={styles.container}>
      {error ? (
        "Error loading data"
      ) : loading ? (
        "Loading data..."
      ) : (
        <div>
          <div
            className={styles.title}
            style={{
              background:
                hotel && hotel.photos && hotel.photos.length > 0
                  ? `url(/${hotel.photos[0]})`
                  : "", // Check if spa and
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.overlay}>
              {" "}
              <div
                className="title1"
                style={{ color: "#fff", fontSize: "40px" }}
              >
                {hotel?.name}
              </div>
            </div>{" "}
          </div>

          <div className={styles.wrapper}>
            <BookRoom />
            <div className={styles.section}>
              {" "}
              <div className={styles.heading}>
                <div className={styles.line}></div>
                <div className={styles.head}>In Room Amenities</div>{" "}
                <div className={styles.line}></div>{" "}
              </div>
              <div className={styles.amenities}>
                {inRoomAmenities.map(
                  (amenity) =>
                    amenity.available && (
                      <div className={styles.amenity} key={`${amenity.name}`}>
                        <amenity.icon className={styles.icon} />
                        {amenity.name}
                      </div>
                    )
                )}
              </div>
            </div>
            <div className={styles.section}>
              {" "}
              <div className={styles.heading}>
                <div className={styles.line}></div>
                <div className={styles.head}>Room Options</div>{" "}
                <div className={styles.line}></div>{" "}
              </div>
              {hotel?.rooms?.map((room) => (
                <div key={`${room}`}>
                  <RoomCard data={room} />
                </div>
              ))}
            </div>
            <div className={styles.section}>
              {" "}
              <div className={styles.heading}>
                <div className={styles.line}></div>
                <div className={styles.head}>Our Facities</div>{" "}
                <div className={styles.line}></div>{" "}
              </div>
              <div className={styles.info}>
                {hotel?.facilities?.spaId ? (
                  <SpaList
                    spaId={hotel?.facilities?.spaId}
                    hotelId={params.id}
                  />
                ) : null}
                {hotel?.facilities?.restId ? (
                  <RestList restId={hotel?.facilities?.restId} />
                ) : null}
                {/* {hotel?.facilities?.dining ? (
                  <div className={styles.facility}>
                    {" "}
                    <div className={styles.right}>
                      {" "}
                      <div className="title1">Dining</div>
                      <p>{hotel?.facilities?.dining?.desc}</p>{" "}
                      <button>Know More</button>
                    </div>
                    <div
                      className={styles.left}
                      style={{
                        backgroundImage: "url(/spa.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {" "}
                    </div>{" "}
                  </div>
                ) : null} */}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.heading}>
                <div className={styles.line}></div>
                <div className={styles.head}>Hotel Information</div>{" "}
                <div className={styles.line}></div>{" "}
              </div>
              <br />
              <div className={styles.cols}>
                {" "}
                <div className={styles.col}>
                  <ul>
                    <li>
                      <b>Check In:</b>
                      {/* {hotel.checkIn}{" "} */}
                      11:00 A.M.
                    </li>
                    <li>
                      <b>Check Out:</b>
                      {/* {hotel.checkOut}{" "} */}
                      1:00 P.M.
                    </li>
                  </ul>
                </div>
                <div className={styles.col}>
                  <ul>
                    <li>
                      <b>Pets:</b>{" "}
                      {/* {hotel.pets == true ? "Pets Allowed" : "No Pets Allowed"}{" "} */}{" "}
                      Pets Not Allowed
                    </li>
                    <li>
                      <b>Smoking:</b>{" "}
                      {/* {hotel.smoking == true
                        ? "Smoking Allowed"
                        : "No Smoking Zone"}{" "} */}
                      No Smoking Zone
                    </li>
                  </ul>
                </div>
                <div className={styles.col}>
                  <ul>
                    <li>
                      <b>Email:</b>
                      {/* {hotel?.contact?.email} */}
                      abc@email.com
                    </li>
                    <li>
                      <b>Number:</b>
                      {/* {hotel?.contact?.phone} */}
                      9876543210
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelData;
