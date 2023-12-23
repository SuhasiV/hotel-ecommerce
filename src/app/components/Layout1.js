// Layout1.js
import React from "react";
import styles from "@/app/styles/layout1.module.css";
import Image from "next/image";

const Layout1 = ({ subheading, heading, paragraph1, paragraph2, imgData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraph}>
        <div className={styles.subheading}>{subheading}</div>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.paragraph1}>{paragraph1}</div>
        <br />
        <div className={styles.paragraph2}>{paragraph2}</div>
      </div>
      <div className={styles.images}>
        <div className={`${styles.image} ${styles.image0}`}>
          <Image
            src={imgData[0].src}
            height={400}
            width={250}
            alt={imgData[0].alt}
            objectFit="cover"
          />
        </div>
        <div className={`${styles.image} ${styles.image1}`}>
          <Image
            src={imgData[1].src}
            height={400}
            width={250}
            alt={imgData[1].alt}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout1;
