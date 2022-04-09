import React from 'react';
import styles from './Banner.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useColorMode, IconButton } from '@chakra-ui/react';

export default function Banner() {
  const { colorMode } = useColorMode();

  return (
    <>
      <div
        className={styles.background}
        style={{
          filter: colorMode === 'light' ? 'grayscale(0%)' : 'grayscale(100%)'
        }}
      ></div>
      <div className={styles.banner}>
        <div className={styles.titles}>
          <h1 className={styles.h1}>Jack Firkin</h1>
        </div>
        <h2 className={styles.h2}>Full Stack Developer</h2>
        <div
          className="arrowWrapper"
          style={{ position: 'absolute', bottom: '2rem' }}
        >
          <KeyboardDoubleArrowDownIcon
            id="downArrow"
            style={{ color: 'white' }}
          />
        </div>
      </div>
    </>
  );
}
