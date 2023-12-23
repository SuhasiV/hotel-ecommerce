import React from "react";
import styles from "@/app/styles/searchItem.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const SearchItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={`/img/ab-2.jpg`}
          height={250}
          width={450}
          alt={`cb sdcdsj`}
          objectFit="cover"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.box1}>
          <div className={styles.title}>Imperial Grand Palace</div>
          <div className={styles.address}>123 Tranquil Lane, Serenity City</div>
          <div className={styles.check}>
            <CheckCircleIcon style={{ color: "green" }} />
            <div> Breakfast Included</div>
          </div>
          <div className={styles.check}>
            <CheckCircleIcon style={{ color: "green" }} />
            <div> Wi-Fi, Netflix, etc</div>
          </div>
          <div className={styles.check}>
            <CheckCircleIcon style={{ color: "green" }} />
            <div> Couple Friendly</div>
          </div>
          <div className={styles.about}>
            Experience luxury and opulence at our flagship hotel, featuring
            spacious suites, gourmet dining, and world-class...
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.star}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className={styles.bottom}>
            <span className={styles.price}>Rs. 4500</span>
            <small>(include tax and fees)</small>
            <div className={styles.button}>Check Avalaibility</div>
          </div>
        </div>
      </div>
    </div>
  );
};
