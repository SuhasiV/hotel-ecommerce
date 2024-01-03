"use client";
import { useState } from "react";
import styles from "@/app/styles/contactForm.module.css";
import React from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
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
      <form className={styles.form} onSubmit={handleSubmit}>
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
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
          value={user.phone}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <br />
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Enter your Message"
          value={user.message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <div>
          {status === "success" && (
            <p className={styles.success_msg}>Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )}

          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
