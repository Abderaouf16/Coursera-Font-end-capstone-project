import React from 'react'
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ConfirmeOrder from "../Components/OrderPlate/ConfirmeOrder";
import Headroom from "react-headroom";

export default function OrderPlate() {
  return (

    <>
      <Headroom>
        <Header />
      </Headroom>
      <ConfirmeOrder />
      <Footer />
    </>
    
  )
}
