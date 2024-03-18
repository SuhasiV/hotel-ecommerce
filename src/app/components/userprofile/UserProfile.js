"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.scss";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import Logout from "./Logout";
import GoogleUserData from "./GoogleUserData";
import WebsiteUserData from "./WebsiteUserData";

const UserProfile = () => {
  // const [userData, setUserData] = useState({});

  const { status, data } = useSession();

  // const { dispatch } = useContext(UserContext);

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const response = await axios.get(`api/user`);
  //       const data = response?.data?.data;
  //       console.log(data);
  //       setUserData(data);
  //     } catch (err) {
  //       console.log("error fetching user data ", err);
  //     }
  //   };
  //   // const url =
  //   //   status === "unauthenticated"
  //   //     ? `/api/user`
  //   //     : `/api/user/${data?.user?.email}`;
  //   getUserDetails();
  // }, [status]);

  // console.log(userData);

  // useEffect(() => {
  //   dispatch({
  //     type: "LOGIN",
  //     payload: {
  //       id: userData?._id,
  //       name: userData?.name,
  //       email: userData?.email,
  //       signUpType: userData?.signUpType,
  //     },
  //   });
  // }, [
  //   dispatch,
  //   userData?._id,
  //   userData?.name,
  //   userData?.email,
  //   userData?.signUpType,
  // ]);

  return (
    <div className={styles.container}>
      {status === "authenticated" ? (
        <GoogleUserData data={data} />
      ) : (
        <WebsiteUserData />
      )}

      <Logout status={status} />
    </div>
  );
};

export default UserProfile;
