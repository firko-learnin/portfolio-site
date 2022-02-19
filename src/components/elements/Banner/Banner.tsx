import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import backgroundLight from "../../../images/backgroundLight.jpg";
import { useColorMode, IconButton } from "@chakra-ui/react";

export default function Banner() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className={styles.top}>
        {colorMode === "dark" ? (
          <Image
            loading={"eager"}
            className={styles.background}
            src={backgroundLight}
            alt="A cityscape photo - London"
            objectFit="fill"
            objectPosition="center"
            layout="fill"
          ></Image>
        ) : (
          <Image
            className={styles.backgroundLight}
            src={backgroundLight}
            alt="A cityscape photo - London"
            objectFit="fill"
            objectPosition="center"
            layout="fill"
          ></Image>
        )}
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
