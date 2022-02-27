import React, { Dispatch, SetStateAction } from 'react';
import styles from './Portfolio.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import PortfolioCard from './PortfolioCard';
import CardCarousel from './CardCarousel';

type Props = {
  setBlockScroll: Dispatch<SetStateAction<boolean>>;
};

const projects = [
  {
    imageAlt: 'A screenshot of my app',
    title: 'Coffee grind database'
  },
  {
    imageAlt: 'A screenshot of my app',
    title: 'Coffee grind database'
  }
];

export default function Portfolio({ setBlockScroll }: Props) {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={styles.h1}>Portfolio:</h1>
        <div className={styles.projectsSection}>
          <CardCarousel
            projects={projects}
            setBlockScroll={setBlockScroll}
          ></CardCarousel>
        </div>
      </section>
      <div className="arrowWrapper">
        <KeyboardDoubleArrowDownIcon id="downArrow" />
      </div>
    </>
  );
}
