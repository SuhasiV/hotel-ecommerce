"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./loginForm.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";

const SignupForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signup", {
        name: user.username,
        email: user.email,
        password: user.password,
        signUpType: "website",
      });

      console.log(response.status);
      // Set the status based on the response from the API route
      if (response.status == 200) {
        setUser({
          username: "",
          email: "",
          password: "",
        });
        router.push("/profile");
      } else {
        setStatus("error");
      }
    } catch (e) {
      if (e.response.status == 400) {
        alert("User already exist. Please login");
        router.push("/profile/login");
      } else {
        console.log(e.response);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <br />
        <div className={styles.section}>
          <label>Full Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.section}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.section}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          {status === "error" && <p>There was an error. Please try again.</p>}
          <button type="submit">Sign Up</button>
          <button
            onClick={() => signIn("google")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <GoogleIcon />
            Signup with Google
          </button>
          <br /> <br />
          <div style={{ textAlign: "center" }}>
            {" "}
            Already have account? Login instead.
          </div>
          <Link href="/profile/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
      </form>{" "}
    </div>
  );
};

export default SignupForm;
