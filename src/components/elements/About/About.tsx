import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import headshot from "../../../images/headshot.jpg";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h1 className={styles.h1}>About:</h1>
      <div className={styles.imageContainer}>
        <Image
          src={headshot}
          alt="Image of Jack Firkin"
          layout="responsive"
        ></Image>
      </div>
      <p className={styles.text}>
        expedita voluptas nobis sit fugiat minus autem exercitationem commodi
        doloremque perferendis molestiae? Quasi ipsam voluptatum maiores animi,
        aperiam qui in perferendis quo minus voluptates quisquam repellat odit
        nam quis perspiciatis enim dolorem fuga dolor ut illum culpa commodi
        dicta, facilis accusantium? Atque repellendus mollitia rem nihil
        perferendis, eligendi eaque.
      </p>
      <ArrowRightIcon id={styles.downArrow} />
    </section>
  );
}
