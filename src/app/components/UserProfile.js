"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState("nothing");
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get("/api/userProfile");

        console.log("resp", response.data.data);
        setUserData(response.data.data);
      } catch (err) {
        console.log("error fetching user data ", err);
      }
    };
    getUserDetails();
  }, []);
  return (
    <div>
      <h5>UserProfile</h5>
      USERNAME: {userData.username}
      <br />
      EMAIL: {userData.email}
    </div>
  );
};

export default UserProfile;
