"use client";
import styles from "./userProfile.module.scss";
import { UserContext } from "@/app/context/UserContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSetUserContextData } from "@/app/helpers/setUserContextData";

const GoogleUserData = () => {
  const { data } = useSession();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const email = data?.user?.email;
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/user/${email}`);
        setUser(response?.data?.data);
        setLoading(false);
      } catch (err) {
        console.log("error fetching user data ", err);
      }
    };
    getUserDetails();
  }, [email]);

  useSetUserContextData(user);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className={styles.section}>
            <span className={styles.heading}>
              Name: -<br />
            </span>
            <span className={styles.data}>{user?.name}</span>{" "}
          </div>
          <div className={styles.section}>
            {" "}
            <span className={styles.heading}>User Email -</span>
            <br />
            <span className={styles.data}>{user?.email}</span>
          </div>
        </>
      )}
    </>
  );
};

export default GoogleUserData;

// "use client";
// import styles from "./userProfile.module.scss";
// import { UserContext } from "@/app/context/UserContext";
// import { useContext, useState } from "react";

// const GoogleUserData = ({ userData }) => {
//   const { email, name } = useContext(UserContext);

//   return (
//     <>
//       {" "}
//       <div className={styles.section}>
//         <span className={styles.heading}>
//           Name: -<br />
//         </span>
//         <span className={styles.data}>{name}</span>{" "}
//       </div>
//       <div className={styles.section}>
//         {" "}
//         <span className={styles.heading}>User Email -</span>
//         <br />
//         <span className={styles.data}>{email}</span>
//       </div>
//     </>
//   );
// };

// export default GoogleUserData;
