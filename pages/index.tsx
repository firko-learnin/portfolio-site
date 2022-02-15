import type { NextPage } from "next";
import Banner from "../src/components/elements/Banner/Banner";
import About from "../src/components/elements/About/About";
import ReactPageScroller from "react-page-scroller";
import Contact from "../src/components/Contact/Contact";
import DarkmodeToggle from "../src/components/DarkmodeToggle/DarkmodeToggle";
import { theme } from "@chakra-ui/react";
import { useState } from "react";

const Home: NextPage = () => {
  const [colourMode, setColourMode] = useState(theme.config.initialColorMode);

  return (
    <main>
      <DarkmodeToggle></DarkmodeToggle>
      <ReactPageScroller>
        <Banner></Banner>
        <About></About>
        <Contact></Contact>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
