import type { NextPage } from 'next';
import ReactPageScroller from 'react-page-scroller';
import { theme } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import DarkmodeToggle from '../src/components/DarkmodeToggle/DarkmodeToggle';
//Sections
import Banner from '../src/components/elements/Banner/Banner';
import About from '../src/components/elements/About/About';
import Links from '../src/components/elements/Links/Links';
import Portfolio from '../src/components/elements/Portfolio/Portfolio';

const Home: NextPage = () => {
  const [colourMode, setColourMode] = useState(theme.config.initialColorMode);
  const [blockScroll, setBlockScroll] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  function handlePageChange(number: number) {
    setPageNumber(Math.min(number, 3));
  }

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
        pageOnChange={handlePageChange}
        customPageNumber={pageNumber}
      >
        <Banner handlePageChange={handlePageChange}></Banner>
        <About handlePageChange={handlePageChange}></About>
        <Portfolio
          handlePageChange={handlePageChange}
          setBlockScroll={setBlockScroll}
        ></Portfolio>
        <Links></Links>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
