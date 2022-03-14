import type { NextPage } from 'next';
import ReactPageScroller from 'react-page-scroller';
import { theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DarkmodeToggle from '../src/components/DarkmodeToggle/DarkmodeToggle';
//Sections
import Banner from '../src/components/elements/Banner/Banner';
import About from '../src/components/elements/About/About';
import Links from '../src/components/elements/Links/Links';
import Portfolio from '../src/components/elements/Portfolio/Portfolio';
import Head from 'next/head';
const Home: NextPage = () => {
  const [colourMode, setColourMode] = useState(theme.config.initialColorMode);
  const [blockScroll, setBlockScroll] = useState(false);
  return (
    <main id="main">
      <title>Jack Firkin - Portfolio Site</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Personal portfolio site for Jack Firkin, a full stack developer living in Birmingham, UK."
      ></meta>
      <meta
        name="keyword"
        content="portfolio, javascript, developer, jack, firkin, react"
      ></meta>
      <DarkmodeToggle></DarkmodeToggle>
      <ReactPageScroller
        blockScrollUp={blockScroll}
        blockScrollDown={blockScroll}
      >
        <Banner></Banner>
        <About></About>
        <Portfolio setBlockScroll={setBlockScroll}></Portfolio>
        <Links></Links>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
