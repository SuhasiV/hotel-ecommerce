"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.scss";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get("/api/userProfile");

        setUserData(response.data.data);
      } catch (err) {
        console.log("error fetching user data ", err);
      }
    };
    getUserDetails();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.heading}>Username - </span> {userData.username}
      </div>
      <div className={styles.section}>
        {" "}
        <span className={styles.heading}>User Email - </span>
        {userData.email}
      </div>
    </div>
  );
};

export default UserProfile;
