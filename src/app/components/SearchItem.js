import React from "react";
import styles from "@/app/styles/searchItem.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Link from "next/link";

const truncText = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  }
  return text;
};

export const SearchItem = ({ id, name, add, desc, features }) => {
  console.log(features);
  const truncDesc = truncText(desc[0], 15);

  const couplefriendly = features?.couplefriendly?.available
    ? features.couplefriendly.imagePath
    : "null";

  const breakfast = features?.breakfast?.available
    ? features.breakfast.imagePath
    : "null";

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
          <div className={styles.title}>{name}</div>
          <div className={styles.address}>{add}</div>
          <div className={styles.features}>
            {couplefriendly && (
              <div className={styles.feature}>
                {" "}
                <Image
                  src={`/img/${couplefriendly}`}
                  alt="couplefriendly Image"
                  height={20}
                  width={20}
                />
                Couple Friendly
              </div>
            )}
            {breakfast && (
              <div className={styles.feature}>
                {" "}
                <Image
                  src={`/img/${breakfast}`}
                  alt="breakfast Image"
                  height={20}
                  width={20}
                />
                Breakfast included
              </div>
            )}
          </div>

          <div className={styles.about}>{truncDesc}</div>
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
            <div className={styles.button}>
              <Link href={`/hotels/${id}`}>Check Avalaibility</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
