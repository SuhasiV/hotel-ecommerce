"use client";

import Link from "next/link";
import FinalCheckOut from "./FinalCheckOut";
import styles from "./checkOut.module.scss";
import { useState } from "react";

const HotelCheckOut = () => {
  const [data, setData] = useState();
  // const stringData = localStorage.getItem("SelectedRoomDetails");
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("SelectedRoomDetails");
    setData(item);
  }

  return (
    <div className={styles.container}>
      {data ? (
        <FinalCheckOut />
      ) : (
        <div style={{}}>
          {" "}
          Experience luxury at its finest! Choose from our exquisite offerings
          including hotel stays, rejuvenating spa treatments, and delectable
          dining experiences. Book now to indulge in the ultimate relaxation and
          enjoyment!
          <br /> <br />
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className={styles.bookNowButton}>Explore More</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HotelCheckOut;
