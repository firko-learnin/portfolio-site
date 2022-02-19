import React from "react";
import styles from "./Contact.module.css";
import { SocialIcon } from "react-social-icons";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

export default function Contact() {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return (
    <section id="about" className={styles.contact}>
      <h1 className={styles.h1}>Links:</h1>
      <div className={styles.socialsContainer}>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://www.linkedin.com/in/jack-firkin-5980819a/"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://github.com/firko-learnin"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://www.instagram.com/jackfirkin/?hl=en-gb"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://twitter.com/firkoLearnin"
        ></SocialIcon>
      </div>
    </section>
  );
}
