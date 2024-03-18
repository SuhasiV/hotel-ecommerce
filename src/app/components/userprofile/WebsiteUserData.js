"use client";
import styles from "./userProfile.module.scss";
import { UserContext } from "@/app/context/UserContext";
import { useSetUserContextData } from "@/app/helpers/setUserContextData";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const WebsiteUserData = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/user");
        setUser(response?.data?.data);
        setLoading(false);
      } catch (err) {
        console.log("error fetching user data ", err);
      }
    };
    getUserDetails();
  }, []);

  useSetUserContextData(user);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className={styles.section}>
            <span className={styles.heading}>
              Name: -<br />
            </span>
            <span className={styles.data}>{user?.name}</span>{" "}
          </div>
          <div className={styles.section}>
            {" "}
            <span className={styles.heading}>User Email -</span>
            <br />
            <span className={styles.data}>{user?.email}</span>
          </div>
        </>
      )}
    </>
  );
};

export default WebsiteUserData;
