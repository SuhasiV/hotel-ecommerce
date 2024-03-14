"use client";
import Link from "next/link";
import styles from "./successButton.module.scss";
import { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";
const SuccessButton = () => {
  const { dispatch } = useContext(SearchContext);
  const handleSuccess = () => {
    dispatch({ type: "CANCEL" });
  };
  return (
    <Link href="/" style={{ textDecoration: "none" }} onClick={handleSuccess}>
      <button className={styles.button}>Explore More</button>
    </Link>
  );
};

export default SuccessButton;
