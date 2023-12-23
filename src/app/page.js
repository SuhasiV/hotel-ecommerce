// Home.js
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider";
import CheckIn from "./components/CheckIn";
import Layout1 from "./components/Layout1";

export default function Home() {
  const subheading = "ABout Us";
  const heading = "Indulge in Unrivaled Luxury at Our Exquisite Hotel";
  const paragraph1 =
    "Welcome to a world of opulence and sophistication where every moment is a celebration of unparalleled luxury. From the grandeur of our meticulously designed suites to the world-class amenities, we invite you to immerse yourself in a haven of comfort and elegance.";
  const paragraph2 =
    "Whether you're savoring delectable cuisine at our gourmet restaurants, unwinding in the serene ambiance of our spa, or basking in the breathtaking views from our rooftop terrace, each experience is crafted to exceed your expectations. Elevate your stay with us and discover a new standard of hospitality.";

  const imgData = [
    { src: "/img/ab-2.jpg", alt: "Hotel Image" },
    { src: "/img/ab-1.jpg", alt: "Hotel Image 2" },
  ];

  return (
    <main className={styles.main}>
      <Slider />
      <div className={styles.wrapper}>
        <CheckIn />
        <Layout1
          subheading={subheading}
          heading={heading}
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          imgData={imgData}
        />
      </div>
    </main>
  );
}
