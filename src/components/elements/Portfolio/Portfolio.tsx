import React from 'react';
import styles from './Portfolio.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={styles.h1}>Portfolio:</h1>
        <div className={styles.projectsSection}>
          <PortfolioCard></PortfolioCard>
        </div>
      </section>
      <div className="arrowWrapper">
        <KeyboardDoubleArrowDownIcon id="downArrow" />
      </div>
    </>
  );
}
