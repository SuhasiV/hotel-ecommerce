import React, { useState } from "react";
import { CheckinCheckout } from "../components/CheckinCheckout";
import styles from "@/app/styles/bookingBox.module.css";

import { useSearchParams } from "next/navigation";

const BookingBox = ({ type, roomTypes }) => {
  const searchParams = useSearchParams();

  const dest = searchParams.get("dest") ?? "null";

  const [destination, setDestination] = useState(dest);

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.label}>Name</div>
        <input type="text" placeholder={destination} />
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Check In - Check Out</div>
        <div className={styles.calender}>
          <CheckinCheckout type="hotels" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Options</div>{" "}
        <div className={styles.options}>
          <div className={styles.optionType}>
            <span>
              Max Price <small> (per night)</small>
            </span>

            <input min={0} type="number" />
          </div>
          <div className={styles.optionType}>
            <span>
              Min Price <small> (per night)</small>
            </span>

            <input min={0} type="number" />
          </div>
          <div className={styles.optionType}>
            <span>Adults</span>
            <input min={1} type="number" />
          </div>
          <div className={styles.optionType}>
            <span>Children</span>
            <input min={0} type="number" />
          </div>
          <div className={styles.optionType}>
            <span>Rooms</span>
            <input min={1} type="number" />
          </div>
          {type === "singleHotelPage" ? (
            <div className={styles.optionType}>
              <span>Room Types</span>
              <select>
                {roomTypes.roomType3.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
                {roomTypes.roomType2.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.search}>
        {type === "singleHotelPage" ? "Book Now" : "Search"}
      </div>
    </div>
  );
};

export default BookingBox;
