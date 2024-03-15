"use client";

import { useEffect, useState } from "react";
import styles from "@/app/components/homeSlider/homeSlider.module.scss";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export default function Page() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${slideIndex * 100}vw)`,
        }}
      >
        <div className={`${styles.slide} ${styles.first}`}>
          <div className={styles.overlay}>
            {" "}
            <div className={styles.content}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <p className={styles.heading}>Imperial Hotels</p>
              <p className={styles.info}>
                Reconnect and reinvigorate your senses in places of incredible
                natural beauty, with meaningful experiences, empathetic
                hospitality, and pioneering wellness woven into the fabric of
                every Imperial Hotel property.
              </p>
              <Link href="/hotels" className="link">
                {" "}
                <div className="buttonBookNow">Book Now</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.second}`}>
          {" "}
          <div className={styles.overlay}>
            {" "}
            <div className={styles.content}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <p className={styles.heading}>Royal Serenity Hotel</p>
              <p className={styles.info}>
                Experience regal comfort at Royal Serenity Hotel, nestled in the
                heart of Jaipurs historic Pink City. Our luxurious
                accommodations, exemplary service, and stunning views of the
                iconic Amer Fort ensure an unforgettable stay.
              </p>
              <Link href={`/hotels/65ec17595ccef3b87e5f2e80`} className="link">
                {" "}
                <div className="buttonBookNow">Explore More</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.third}`}>
          {" "}
          <div className={styles.overlay}>
            {" "}
            <div className={styles.content}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <p className={styles.heading}>Majestic Peaks Lodge</p>
              <p className={styles.info}>
                Discover the majestic beauty of the Himalayas at Majestic Peaks
                Lodge, situated in the picturesque town of Manali. Our cozy
                accommodations, warm hospitality, and breathtaking mountain
                vistas offer an enchanting retreat.
              </p>
              <Link href={`/hotels/65ec1890d1f55f31f73de238`} className="link">
                {" "}
                <div className="buttonBookNow">Explore More</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => handleClick("right")}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
}
