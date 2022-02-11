import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Banner from "../src/components/elements/Banner/Banner";

const Home: NextPage = () => {
  return (
    <main>
      <Banner></Banner>
    </main>
  );
};

export default Home;
