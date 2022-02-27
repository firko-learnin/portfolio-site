import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import headshot from '../../../images/headshot.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function About() {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className={styles.textArea}>
          <h1 className={styles.h1}>About:</h1>
          <p className={styles.text}>
            I am a full stack developer based in Birmingham UK with a passion
            for tech and problem solving. {'\n'}
            {'\n'}
            After several years working in the financial services industry I
            decided to take my interest in tech to the next level and pursue a
            full-time career in software development by joining{'\n'}The School
            of Code&#39;s 16 week intensive full stack bootcamp.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={headshot}
            alt="Image of Jack Firkin"
            layout="responsive"
          ></Image>
        </div>
        {/* <div className={styles.experience}>
          {' '}
          <h2 className={styles.h2}>Experience:</h2>
        </div> */}
      </div>
      <div className="arrowWrapper">
        <KeyboardDoubleArrowDownIcon id="downArrow" />
      </div>
    </section>
  );
}
