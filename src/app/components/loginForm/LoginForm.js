// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { NextResponse } from "next/server";
// import styles from "./loginForm.module.scss";

// const LoginForm = () => {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [status, setStatus] = useState(null);

//   function handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: { Content_Type: "application/json" },
//         body: JSON.stringify({
//           email: user.email,
//           password: user.password,
//         }),
//       });
//       console.log(response);
//       if (response.status === 200) {
//         setUser({
//           username: "",
//           email: "",
//           password: "",
//         });
//         console.log("login successful", response.data);
//         // router.push("/");
//       } else {
//         setStatus("error");
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.section}>
//           <label>Email</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={user.email}
//             placeholder="Enter your email"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className={styles.section}>
//           <label>Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             placeholder="Enter your password"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           {status === "error" && <p>There was an error. Please try again.</p>}
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

"use client";
import { useRouter } from "next/navigation";
import styles from "./loginForm.module.scss";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const onLogin = async (e) => {
    try {
      const response = await axios.post("/api/login", user);
      router.push("/profile");
    } catch (e) {
      console.log("Login failed", e.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
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
      <div className={styles.section}>
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
        {/* {status === "error" && <p>There was an error. Please try again.</p>} */}
        <button onClick={onLogin}>Login</button>
        <br /> <br />
        <div style={{ textAlign: "center" }}>
          Do not have an account? Signup!!!
        </div>
        <Link href="/profile/signup">
          {" "}
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
