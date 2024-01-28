import React from "react";
import "./main.css";
import "./main.css";
import eatingTable from "../assets/eatingTable.png";
import { NavLink } from "react-router-dom";
import greekSalad from "../assets/greekSalade.webp";
import lemonDessert from "../assets/lemonDessert.jpeg";
import bruschetta from "../assets/bruschetta.jpg";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="hero_container">
          <div className="hero_text-container">
            <div className="">
              <h1>Little Lemon Chicago</h1>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <NavLink to="/">
                <button className="">Reserve a Table</button>
              </NavLink>
            </div>
          </div>
          <div className="hero_img_container">
            <img src={eatingTable} alt="" />
          </div>
        </div>
      </div>
      <div class="hero-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#495e57"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="menu_section" id="Menu">
        <div className="menu_section-container">
          <div className="">
            <h1 className="menu-section-title">This Week's Specials</h1>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-img">
                <img className="" src={greekSalad} alt="" />
              </div>
              <div className="card-title">
                <h2>Greek Salad</h2>
                <p>$12.99</p>
              </div>
              <p className="card-text">
                The famous Greek salad of crispy lettuce, peppers, olives and
                our Chicago styled feta cheese, garnished with crunchy garlic,
                rosemary croutons.
              </p>
              <div className="card-btn">
                <NavLink className="" to="#">
                  Order Now
                </NavLink>{" "}
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img className="" src={bruschetta} alt="" />
              </div>
              <div className="card-title">
                <h2>Bruschetta</h2>
                <p>$5.99</p>
              </div>
              <p className="card-text">
                The famous Greek salad of crispy lettuce, peppers, olives and
                our Chicago styled feta cheese, garnished with crunchy garlic,
                rosemary croutons.
              </p>
              <div className="card-btn">
                <NavLink className="" to="#">
                  Order Now
                </NavLink>{" "}
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img className="" src={lemonDessert} alt="" />
              </div>
              <div className="card-title">
                <h2>Lemon Dessert</h2>
                <p>$5.00</p>
              </div>
              <p className="card-text">
                The famous Greek salad of crispy lettuce, peppers, olives and
                our Chicago styled feta cheese, garnished with crunchy garlic,
                rosemary croutons.
              </p>
              <div className="card-btn">
                <NavLink className="" to="#">
                  Order Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="reviews-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#495e57"
            fill-opacity="1"
            d="M0,96L80,80C160,64,320,32,480,53.3C640,75,800,149,960,154.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="reviews-section">
        <div className="reviews_section-container">
          <div className="">
            <h1 className="reviews-section-title">This Week's Specials</h1>
          </div>
          <div className="cards-reviews-container"></div>
        </div>
      </section>
    </>
  );
}
