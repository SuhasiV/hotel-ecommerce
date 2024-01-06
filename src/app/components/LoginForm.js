"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          password: "",
        });
        console.log("login successful", response.data);
        router.push("/");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {status === "error" && <p>There was an error. Please try again.</p>}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
