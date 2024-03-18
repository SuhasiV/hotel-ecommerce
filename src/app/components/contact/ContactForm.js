"use client";
import { useContext, useState } from "react";
import styles from "@/app/contact/contact.module.scss";
import React from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  // const { logOut } = useContext(AuthContext);
  const router = useRouter();
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

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     router.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.containerComponent}>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <form onSubmit={handleSubmit} className={styles.section}>
        <br />

        <label>Username</label>
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
        <br />
        <label>Phone Number</label>
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
        <label>Enter your message</label>
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
            <p className={styles.success_msg}>
              Thank you for your message. Our staff will contact you as soon as
              possible.
            </p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
