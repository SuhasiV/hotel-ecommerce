"use client";
import Link from "next/link";
import styles from "./successButton.module.scss";
import { useContext, useEffect } from "react";
import { SearchContext } from "@/app/context/SearchContext";
const SuccessButton = () => {
  const { dispatch } = useContext(SearchContext);

  useEffect(() => {
    dispatch({ type: "CANCEL" });
  }, [dispatch]);
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <button className={styles.button}>Explore More</button>
    </Link>
  );
};

export default SuccessButton;
