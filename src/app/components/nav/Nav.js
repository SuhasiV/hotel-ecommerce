import Link from "next/link";
import React from "react";
import styles from "@/app/components/nav/nav.module.scss";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

export const Nav = () => {
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
        <div>
          <Link href="/hotels" className={styles.nav_link}>
            Our Hotels
          </Link>
          <Link href="/dining" className={styles.nav_link}>
            Dining
          </Link>
          <Link href="/spa" className={styles.nav_link}>
            Spa
          </Link>
          <Link href="/contact" className={styles.nav_link}>
            Contact
          </Link>

          <Link href="/profile" className={styles.nav_link} style={{}}>
            <PersonIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};
