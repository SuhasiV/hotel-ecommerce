"use client";

import Link from "next/link";
import styles from "@/app/components/nav/nav.module.scss";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [name, setName] = useState(null);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const loggedInUser = localStorage.getItem("LoggedInUser");
      if (loggedInUser) {
        const userDetails = JSON.parse(loggedInUser);
        setName(userDetails.name);
      }
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/" className={styles.logo}>
            <Image
              src="/img/logo.png"
              alt="Imperial Hotels"
              width="30"
              height="30"
            />
            <Image
              src="/img/logo_name_rect.png"
              alt="Imperial Hotels"
              width="95"
              height="35"
            />
          </Link>
        </div>
        <div className={styles.tabs}>
          <div>
            {" "}
            <Link href="/hotels" className={styles.nav_link}>
              Our Hotels
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/dining" className={styles.nav_link}>
              Dining
            </Link>
          </div>

          <div>
            {" "}
            <Link href="/spa" className={styles.nav_link}>
              Spa
            </Link>
          </div>

          <div>
            <Link href="/contact" className={styles.nav_link}>
              Contact
            </Link>
          </div>

          <div className={styles.button}>
            {" "}
            <Link href="/profile" className={styles.nav_link}>
              {" "}
              <button>
                {" "}
                <div>{name}</div>
                <div>
                  <PersonIcon />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
