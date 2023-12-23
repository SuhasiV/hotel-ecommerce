"use Client";
import React, { useState } from "react";
import styles from "@/app/styles/slider.module.css";

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={`${styles.slide} ${styles.first}`}>Slide1</div>
      <div className={`${styles.slide} ${styles.second}`}>Slide2</div>
      <div className={`${styles.slide} ${styles.third}`}>Slide3</div>
    </div>
  );
};

export default Slide;
