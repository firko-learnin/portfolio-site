import React, { Dispatch, SetStateAction } from 'react';
import styles from './Portfolio.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CardCarousel from './CardCarousel';
import cgd from '../../../../public/coffeeGrindDatabase.png';
import recipeApp from '../../../../public/recipeApp.png';
import portfolioSite from '../../../../public/portfolioSite.png';
import lifestyleLifter from '../../../../public/lifestyleLifter.jpg';
import devhub from '../../../../public/devhub.png';
import glastonburyCompanion from '../../../../public/glastoCompanion.jpg';

type Props = {
  setBlockScroll: Dispatch<SetStateAction<boolean>>;
  handlePageChange: (number: number) => void;
};

const projects = [
  {
    imageAlt: 'A screenshot of my Glastonbury Festival app',
    title: 'Glastonbury Companion',
    description:
      'A WIP React Native app for the Glastonbury Festival. I am building the app for Android and iOS using Expo. It currently includes Firebase authentication, a secret set Twitter newsfeed and a schedule displaying the acts playing each day. I am currently in the process of creating a Go API using MongoDB to allow users to create personalised schedules and share them with others.',
    githubUrl: 'https://github.com/firko-learnin/glastonbury-companion',
    deployUrl: 'https://github.com/firko-learnin/glastonbury-companion',
    image: glastonburyCompanion
  },
  {
    imageAlt: 'A screenshot of my coffee grind database app',
    title: 'Coffee Grind Database',
    description:
      'A full stack app for coffee enthusiasts to share espresso/filter coffee recipes. I created this app as a Christmas project after 6 weeks at School of Code using HTML, CSS and vanilla JS for the front end and an Express back end. The app is deployed on Heroku using a PostgreSQL database to store recipes. I am currently in the process of rewriting this app using NextJS and TypeScript (see React-rewrite branch).',
    githubUrl: 'https://github.com/firko-learnin/CGD',
    deployUrl: 'https://coffeegrinddatabase.herokuapp.com/',
    image: cgd
  },
  {
    imageAlt: 'A screenshot of the Life Lifter app',
    title: 'SoC - Final Project',
    description:
      'An all-in-one lifestyle app created in an agile team of 6 for the School of Code final project, with a focus on minimalism and accessibility. The app was created over 4 weeks using week long sprints. Technology used: React, NextJS, Express, Firebase authentication, Postgres, Jest, SuperTest, Cypress, MUI, Figma, Postman, Lucidchart, Heroku and Netlify.',
    githubUrl:
      'https://github.com/SchoolOfCode/final-project-front-end-theredhotchillicoders/tree/productionbranch',
    deployUrl: 'https://lifelifter.netlify.app/',
    image: lifestyleLifter
  },
  {
    imageAlt: 'A screenshot of the dev help channel alternative',
    title: 'SoC - Week 9 Project',
    description:
      'During daily workshops at the School of Code bootcampers would post their issues in a Slack channel for assistance. The channel would often fill up in tricky workshops and posts would get lost. For our midway School of Project my team decided to make a dashboard as a solution to help fellow bootcampers. The dashboard allows bootcampers to see problems others are facing in real-time and see which rooms coaches are helping in order to join rooms with the same issues. The dashboard was created using Express, Postgres, React and the MUI library.',
    githubUrl:
      'https://github.com/SchoolOfCode/national-project-week-victoria-diego-wahida-jack',
    deployUrl: 'https://socdevhub.netlify.app/',
    image: devhub
  },
  {
    imageAlt: 'A screenshot of my recipe app',
    title: 'SoC - Week 3 Hackathon - Recipe App',
    description:
      'A recipe app made pair programming during a School of Code Hackathon Friday after 3 weeks at School of Code.  HTML, CSS and vanilla JS were used to create this app. ',
    githubUrl: 'https://github.com/firko-learnin/CGD',
    deployUrl: 'https://coffeegrinddatabase.herokuapp.com/',
    image: recipeApp
  },
  {
    imageAlt: 'A screenshot of my portfolio site',
    title: 'My Portfolio Site',
    description:
      'I decided to use my portfolio site as a chance to practice with React but also to learn some new skills. This site is currently built using NextJS, Typescript and Chakra UI.',
    githubUrl: 'https://github.com/firko-learnin/portfolio-site',
    deployUrl: 'https://jackfirkin.tech/',
    image: portfolioSite
  }
];

export default function Portfolio({ setBlockScroll, handlePageChange }: Props) {
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
        <button id="downArrow" onClick={() => handlePageChange(3)}>
          <KeyboardDoubleArrowDownIcon id="downArrow" />
        </button>
      </div>
    </>
  );
}
