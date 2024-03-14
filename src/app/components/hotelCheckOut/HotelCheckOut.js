"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./hotelCheckOut.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import { format } from "date-fns";
import Link from "next/link";
import { SearchContext } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";

const HotelCheckOut = () => {
  const stringData = localStorage.getItem("SelectedRoomDetails");
  const { hotelId, roomId, allDates, rooms, availableRoomList } =
    JSON.parse(stringData);
  const { dispatch } = useContext(SearchContext);
  const router = useRouter();

  const [hotel, setHotel] = useState({});
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHotel = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/hotels/${hotelId}`);
        setHotel(response.data.hotel);
        const roomresponse = await axios.get(`/api/rooms/${roomId}`);
        setRoom(roomresponse.data.room);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.error("Error fetching hotel data by id", err);
      }
    };

    getHotel();
  }, [hotelId, roomId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const availableRoomIds = availableRoomList.reduce((acc, obj) => {
    for (let key in obj) {
      if (obj[key] === true) {
        acc.push(key);
      }
    }
    return acc;
  }, []);

  const roomIdsToUpdate = availableRoomIds.slice(0, rooms);
  console.log(roomIdsToUpdate);

  console.log(allDates);

  const handleBookNow = async () => {
    try {
      const response = await axios.put(`/api/rooms/${roomId}`, {
        roomIdsToUpdate,
        allDates,
      });
      router.push("/profile/success");
    } catch (err) {
      console.error("Error occured while updating room", err);
    }
  };
  const handleCancel = () => {
    dispatch({ type: "CANCEL" });
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className="title1" style={{ color: "#4a4e69" }}>
        {hotel?.name}
      </div>
      <div className={styles.address}>
        <LocationOnIcon />
        {hotel?.address}
      </div>
      <br />
      <div className={styles.roomType}>{room?.name}</div>
      <div className={styles.detail}>
        <div className={styles.info}>
          <h4>Check-In</h4>
          <span>{format(new Date(allDates[0]), "dd/MM/yyyy")}</span>
        </div>
        <div className={styles.info}>
          <h4>Check-Out</h4>
          <span>
            {format(new Date(allDates[allDates.length - 1]), "dd/MM/yyyy")}
          </span>
        </div>
        <div className={styles.info}>
          <h4>Nights</h4>
          <span>{allDates.length - 1} Nights</span>
        </div>
        <div className={styles.info}>
          <h4>Room</h4>
          <span>{rooms} Rooms</span>
        </div>
      </div>
      <hr />
      <div className={styles.endSection}>
        <div>
          <span
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#4a4e69",
            }}
          >
            {" "}
            Final Amount :-{" "}
          </span>
          <span
            style={{
              fontWeight: "700",
              fontSize: "22px",
              color: "#22223b",
            }}
          >
            Rs. {room.price * rooms * (allDates.length - 1)}
          </span>
        </div>{" "}
        <div className={styles.buttons}>
          {" "}
          <Link
            href={`/hotels/${hotelId}`}
            className={styles.link}
            onClick={handleCancel}
          >
            <div className={styles.bookNowButton}>Other Dates</div>
          </Link>
          <div className={styles.bookNowButton} onClick={handleBookNow}>
            Book Now
          </div>
          <div
            className={styles.bookNowButton}
            style={{ background: "#720026" }}
            onClick={handleCancel}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCheckOut;
