"use client";
import Link from "next/link";
import styles from "./successButton.module.scss";
import { useContext, useEffect } from "react";
import { SearchContext } from "@/app/context/SearchContext";
const SuccessButton = ({ type }) => {
  const { dispatch } = useContext(SearchContext);
  console.log(type);
  useEffect(() => {
    dispatch({ type: "CANCEL" });
  }, [dispatch]);
  return (
    <>
      {type === "success" ? (
        <Link href="/" style={{ textDecoration: "none" }}>
          <button className={styles.button}>Explore More</button>
        </Link>
      ) : (
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <button className={styles.button}>Contact Us</button>
        </Link>
      )}
    </>
  );
};

export default SuccessButton;
