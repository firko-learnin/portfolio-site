import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import { theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DarkmodeToggle from "../src/components/DarkmodeToggle/DarkmodeToggle";
//Sections
import Banner from "../src/components/elements/Banner/Banner";
import About from "../src/components/elements/About/About";
import Contact from "../src/components/elements/Contact/Contact";
import Portfolio from "../src/components/elements/Portfolio/Portfolio";
const Home: NextPage = () => {
  const [colourMode, setColourMode] = useState(theme.config.initialColorMode);

  return (
    <main>
      <DarkmodeToggle></DarkmodeToggle>
      <ReactPageScroller animationTimer={800} animationTimerBuffer={100}>
        <Banner></Banner>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
