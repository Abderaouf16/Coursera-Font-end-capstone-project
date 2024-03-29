import React from "react";
import Hero from "../Components/HomePage/Hero";
import Main from "../Components/HomePage/Main";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Headroom from "react-headroom";

export default function Home() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
