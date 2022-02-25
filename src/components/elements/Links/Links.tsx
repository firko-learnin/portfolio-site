import React from 'react';
import styles from './Links.module.css';
import { SocialIcon } from 'react-social-icons';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';

export default function Links() {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return (
    <section id="links" className={styles.contact}>
      <h1 className={styles.h1}>Links:</h1>
      <div className={styles.socialsContainer}>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://www.linkedin.com/in/jack-firkin-5980819a/"
          target="_blank"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://github.com/firko-learnin"
          target="_blank"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://www.instagram.com/jackfirkin/?hl=en-gb"
          target="_blank"
        ></SocialIcon>
        <SocialIcon
          fgColor={theme.colors.brand.white}
          url="https://twitter.com/firkoLearnin"
          target="_blank"
        ></SocialIcon>
      </div>
    </section>
  );
}
