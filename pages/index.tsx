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
const Home: NextPage = () => {
  const [colourMode, setColourMode] = useState(theme.config.initialColorMode);
  const [blockScroll, setBlockScroll] = useState(false);
  return (
    <main id="main">
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
