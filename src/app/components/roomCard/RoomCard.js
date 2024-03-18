"use client";

import styles from "@/app/components/roomCard/roomCard.module.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BedIcon from "@mui/icons-material/Bed";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotTubIcon from "@mui/icons-material/HotTub";
import BalconyIcon from "@mui/icons-material/Balcony";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { availableRoom, dateRange } from "@/app/helpers/dateRange";

const RoomCard = ({ data }) => {
  const router = useRouter();
  const { option, date, dispatch } = useContext(SearchContext);
  // const { state, setBookedRoomDetails } = useContext(BookRoomContext);
  // console.log(state);
  const [room, setRoom] = useState({});
  const [loadin, setLoadin] = useState();
  const [error, setError] = useState(false);
  const [alldates, setAllDates] = useState(false);

  useEffect(() => {
    const roomData = async () => {
      try {
        setLoadin(true);
        const response = await axios.get(`/api/rooms/${data}`);
        const roomData = response?.data?.room;
        setRoom(roomData);
        setError(false);
        setLoadin(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    };
    roomData();

    const alldatesacq = dateRange(date);
    setAllDates(alldatesacq);
  }, [data, date]);

  if (loadin) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const features = [
    {
      icon: BathtubIcon,
      name: "Bath Tub & Bath Robes",
      available: room?.features?.bathtub,
    },
    {
      icon: FreeBreakfastIcon,
      name: "Breakfast",
      available: room?.features?.breakfast,
    },
    {
      icon: HotTubIcon,
      name: "Personal Jacuzzi",
      available: room?.features?.personalJacuzzi,
    },
    {
      icon: BalconyIcon,
      name: "Personal Balcony",
      available: room?.features?.balcony,
    },
  ];

  const isAvailable = availableRoom(alldates, room?.roomNumbers, option.room);
  const availableRoomList = isAvailable.roomsAvailable
    ? isAvailable.availableRoomList
    : [];

  const roomIdsToUpdate = Object.values(availableRoomList).reduce(
    (acc, value) => {
      if (acc.length < option.room) {
        acc.push(value);
      }

      return acc;
    },
    []
  );

  const handleBookNow = () => {
    const selectedRoomDetails = {
      hotelId: room.hotelId,
      roomId: room._id,
      allDates: alldates,
      rooms: option.room,
      roomIdsToUpdate,
    };
    dispatch({ type: "BOOK", payload: selectedRoomDetails });
    router.push("/profile");
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.left}
        style={{
          background: room && room.photo ? `url(/${room.photo})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.right}>
        <div className="title1" style={{ fontSize: "25px" }}>
          {room.name}
        </div>
        <div className={styles.desc}>
          <div className={styles.column}>
            <ul>
              <li>
                <PeopleAltIcon />
                {room.maxPeople} People<small>/Room</small>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              <li>
                <BedIcon />
                {room.bedType}
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className={styles.grid}>
          {features?.map(
            (item) =>
              item.available && (
                <div className={styles.gridCol} key={item.name}>
                  <item.icon />
                  {item.name}
                </div>
              )
          )}
        </div>
        <hr />
        <div className={styles.price}>
          <span style={{ fontWeight: "700", fontSize: "22px" }}>
            Rs. {room.price}
          </span>
          {isAvailable.roomsAvailable === true ? (
            <div>
              /night <small>(incl GST)</small>
              <button className={styles.button} onClick={handleBookNow}>
                Book Now
              </button>
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
