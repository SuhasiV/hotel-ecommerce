"use client";
import { useState } from "react";
import React from "react";

const SignupForm = () => {
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
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          password: "",
        });
        setStatus("success");
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
        <br />

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your name"
          value={user.username}
          onChange={handleChange}
          required
        />
        <br />
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
        <br />
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
        <br />
        <div>
          {status === "success" && <p>Thank you for your message!</p>}
          {status === "error" && <p>There was an error. Please try again.</p>}

          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
