"use client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";

export const useSetUserContextData = (user) => {
  const { dispatch } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: user?._id,
        name: user?.name,
        email: user?.email,
        signUpType: user?.signUpType,
      },
    });
  }, [dispatch, user?._id, user?.name, user?.email, user?.signUpType]);
  return console.log("done");
};
