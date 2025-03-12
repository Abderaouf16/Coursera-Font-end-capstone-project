import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import eatingTable from "../assets/eatingTable.png";
import {} from "./Styles/Hero.css";
import heroImage from "../../Components/assets/heroImage.jpg";

export default function Hero() {
  return (
    <>
    <div className="flex items-center justify-center mt-16">
      <div className=" abdou  w-4/5  rounded-3xl ">
        <div className="main ">
          <div className=" flex flex-col gap-4  mx-12  ">
            <h1 className="  text-yellow-300  font-bold text-4xl">Little Lemon Chicago</h1>
            <p className="w-2/4  font-semibold text-lg text-yellow-300">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <NavLink to="/ReserveTable">
              <button className=" bg-yellow-300 p-4 font-bold   [border-radius:17px_28px_17px_28px]">Reserve a Table</button>
            </NavLink>
          </div>
          {/* <div className="hero_container ">
          <div className="hero_text-container ">
            <div className=" bg-white rounded-3xl">
              <h1>Little Lemon Chicago</h1>
              <p className="w-2/4 font-bold">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <NavLink to="/ReserveTable">
                <button className="">Reserve a Table</button>
              </NavLink>
            </div>
          </div>
        </div> */}
        </div>
        {/* <div className="hero-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#495e57"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      </div>

    </div>
    </>
  );
}
