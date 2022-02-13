import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import background from "../../../images/background.jpg";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <>
      <div className={styles.top}>
        <Image
          className={styles.background}
          src={background}
          alt="A cityscape photo - London"
          objectFit="fill"
          objectPosition="center"
          layout="fill"
        ></Image>
        <div className={styles.banner}>
          <div className={styles.titles}>
            <h1 className={styles.h1}>Jack Firkin</h1>
          </div>
          <h2 className={styles.h2}>Full Stack Engineer</h2>
          <ArrowRightIcon id={styles.downArrow} />
        </div>
      </div>
    </>
  );
}
