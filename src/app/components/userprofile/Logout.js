"use client";
import styles from "./userProfile.module.scss";
import axios from "axios";
import { signOut } from "next-auth/react";
import { UserContext } from "@/app/context/UserContext";
import { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";

const Logout = ({ status }) => {
  const router = useRouter();

  const { dispatch } = useContext(SearchContext);

  const { dispatch: dispatchUserData } = useContext(UserContext);

  const handleWebsiteUserLogout = async () => {
    try {
      await axios.get("/api/logout");
      dispatch({ type: "CANCEL" });
      dispatchUserData({ type: "LOGOUT" });
      router.push("/profile/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoogleUserLogout = () => {
    signOut();
    dispatch({ type: "CANCEL" });
    dispatchUserData({ type: "LOGOUT" });
    router.push("/profile/login");
  };
  return (
    <div>
      {" "}
      {status === "authenticated" ? (
        <button className="buttonDarkBlue" onClick={handleGoogleUserLogout}>
          Google Log Out
        </button>
      ) : (
        <button onClick={handleWebsiteUserLogout} className="buttonDarkBlue">
          Website Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
