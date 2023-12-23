"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/slider.module.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";
import { BookNow } from "./BookNow";

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
          <div className={styles.content}>
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <p className={styles.subheading}>ULTIMATE LUXURY EXPERIENCE</p>
            <p className={styles.heading}>
              ENJOY THE BEST MOMENTS OF YOUR LIFE
            </p>
            <BookNow />
          </div>
        </div>
        <div className={`${styles.slide} ${styles.second}`}>Slide2</div>
        <div className={`${styles.slide} ${styles.third}`}>Slide3</div>
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

/*
const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  
  div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
  */
