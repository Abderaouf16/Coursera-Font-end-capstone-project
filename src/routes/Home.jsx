import React from "react";
import Hero from "../Components/HomePage/Hero";
import Order from "../Components/HomePage/Order";
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
      <Order />
      <Footer />
    </>
  );
}
