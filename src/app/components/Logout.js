"use client";

import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import styles from "@/app/profile/profile.module.scss";
import { useRouter } from "next/navigation";
import axios from "axios";

const Logout = () => {
  const router = useRouter();
  const { dispatch } = useContext(SearchContext);
  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      dispatch({ type: "CANCEL" });
      router.push("/profile/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button onClick={handleLogout} className={styles.logout}>
      Logout
    </button>
  );
};

export default Logout;
