import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import headshot from '../../../images/headshot.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

type Props = {
  handlePageChange: (number: number) => void;
};

export default function About({ handlePageChange }: Props) {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className={styles.textArea}>
          <h3 className={styles.h3}>About:</h3>
          <p className={styles.text}>
            I am a full stack developer based in Birmingham UK with a passion
            for tech and problem solving. {'\n'}
            {'\n'}
            After several years working in the financial services industry I
            decided to take my interest in tech to the next level and pursue a
            full-time career in software development by joining the School of
            Code&#39;s 16 week intensive full stack bootcamp.{'\n'}
            {'\n'}I thoroughly enjoyed my experience at the School of Code,
            which not only teaches people to code but also teaches the important
            soft skills required to become a collaborative and creative
            developer.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={headshot}
            alt="Image of Jack Firkin"
            layout="responsive"
          ></Image>
        </div>
        <div className={styles.experience}>
          <h4 className={styles.h4}>Tech stack:</h4>
          <ul
            className={(styles.text, styles.ul)}
            style={{ listStylePosition: 'inside' }}
          >
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>NextJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>React Native</li>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Cypress</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="arrowWrapper">
        <button id="downArrow" onClick={() => handlePageChange(2)}>
          <KeyboardDoubleArrowDownIcon id="downArrow" />
        </button>
      </div>
    </section>
  );
}
