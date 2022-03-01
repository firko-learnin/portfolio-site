import React from 'react';
import styles from './Links.module.css';
import { SocialIcon } from 'react-social-icons';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { ThemeContext } from '@emotion/react';
import FlickrIcon from './Links copy';

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
        <a
          href="https://flickr.com/photos/141839430@N08/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%'
            }}
          >
            <FlickrIcon></FlickrIcon>
          </div>
        </a>
      </div>
    </section>
  );
}
