import React, { Dispatch, SetStateAction } from 'react';
import styles from './Portfolio.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import PortfolioCard from './PortfolioCard';
import CardCarousel from './CardCarousel';
import cgd from '../../../../public/coffeeGrindDatabase.png';
import recipeApp from '../../../../public/recipeApp.png';
import portfolioSite from '../../../../public/portfolioSite.png';

type Props = {
  setBlockScroll: Dispatch<SetStateAction<boolean>>;
};

const projects = [
  {
    imageAlt: 'A screenshot of my coffee grind database app',
    title: 'Coffee grind database',
    description:
      'A full stack app for coffee enthusiasts to share espresso/filter coffee recipes. I created this app as a Christmas project after 6 weeks at School of Code using HTML, CSS and vanilla JS for the front end and an Express back end. The app is deployed on Heroku using a PostgreSQL database to store recipes. I am currently in the process of rewriting this app using NextJS and TypeScript (see React-rewrite branch).',
    githubUrl: 'https://github.com/firko-learnin/CGD',
    deployUrl: 'https://coffeegrinddatabase.herokuapp.com/',
    image: cgd
  },
  {
    imageAlt: 'A screenshot of my recipe app',
    title: 'Recipe app',
    description:
      'A recipe app made pair programming during a School of Code Hackathon Friday after 3 at School of Code.  HTML, CSS and vanilla JS were used to create this app. ',
    githubUrl: 'https://github.com/firko-learnin/CGD',
    deployUrl: 'https://coffeegrinddatabase.herokuapp.com/',
    image: recipeApp
  },
  {
    imageAlt: 'A screenshot of my portfolio site',
    title: 'This portfolio site!',
    description:
      'I decided to use my portfolio site as a chance to practice with React but also to learn some new skills. This site is currently built using NextJS, Typescript and Chakra UI.',
    githubUrl: 'https://github.com/firko-learnin/portfolio-site',
    deployUrl: 'https://jackfirkin.tech/',
    image: portfolioSite
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
