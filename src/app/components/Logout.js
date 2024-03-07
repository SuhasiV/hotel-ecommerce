"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/profile/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
