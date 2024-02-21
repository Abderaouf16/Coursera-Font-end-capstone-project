import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Reserve from "../Components/ReserveTablePage/reserve";
import Headroom from "react-headroom";

export default function ReserveTable() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Reserve />
      <Footer />
    </>
  );
}
