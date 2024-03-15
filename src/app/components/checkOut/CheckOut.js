"use client";

import Link from "next/link";
import FinalCheckOut from "./FinalCheckOut";
import styles from "./checkOut.module.scss";

const HotelCheckOut = () => {
  const stringData = localStorage.getItem("SelectedRoomDetails");
  console.log(stringData);

  return (
    <div className={styles.container}>
      {stringData ? (
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
