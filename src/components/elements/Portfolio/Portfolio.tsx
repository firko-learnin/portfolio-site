import React from 'react';
import styles from './Portfolio.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={styles.h1}>Portfolio:</h1>
        <p className={styles.text}>
          expedita voluptas nobis sit fugiat minus autem exercitationem commodi
          doloremque perferendis molestiae? Quasi ipsam voluptatum maiores
          animi, aperiam qui in perferendis quo minus voluptates quisquam
          repellat odit nam quis perspiciatis enim dolorem fuga dolor ut illum
          culpa commodi dicta, facilis accusantium? Atque repellendus mollitia
          rem nihil perferendis, eligendi eaque.
        </p>
      </section>
      <div className="arrowWrapper">
        <KeyboardDoubleArrowDownIcon id="downArrow" />
      </div>
    </>
  );
}
