"use client";

import Link from "next/link";
import FinalCheckOut from "./FinalCheckOut";
import styles from "./checkOut.module.scss";
import { useEffect, useState } from "react";

const HotelCheckOut = () => {
  const [data, setData] = useState();
  // const stringData = localStorage.getItem("SelectedRoomDetails");
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched && typeof window !== "undefined") {
      const item = localStorage.getItem("SelectedRoomDetails");
      setData(item);
      setIsDataFetched(true);
    }
  }, [isDataFetched]);

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
