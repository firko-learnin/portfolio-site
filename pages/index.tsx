import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Banner from "../src/components/elements/Banner/Banner";
import About from "../src/components/elements/About/About";

const Home: NextPage = () => {
  return (
    <main>
      <Banner></Banner>
      <About></About>
    </main>
  );
};

export default Home;
