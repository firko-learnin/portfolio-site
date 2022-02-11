import React from "react";
import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.titles}>
        <h1 className={styles.h1}>
          <Link href={"/"}>Jack Firkin</Link>
        </h1>
        <h2 className={styles.h2}>Full Stack Engineer</h2>
      </div>
    </div>
  );
}
