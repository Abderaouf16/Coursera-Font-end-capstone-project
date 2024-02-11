import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../Components/HomePage/Hero";
import Order from "../Components/HomePage/Order";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Order />
      <Footer />
    </>
  );
}
