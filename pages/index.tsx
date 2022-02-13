import type { NextPage } from "next";
import Banner from "../src/components/elements/Banner/Banner";
import About from "../src/components/elements/About/About";
import ReactPageScroller from "react-page-scroller";
import Contact from "../src/components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <main>
      <ReactPageScroller>
        <Banner></Banner>
        <About></About>
        <Contact></Contact>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
