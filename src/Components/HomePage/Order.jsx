import React from "react";
import greekSalad from "../assets/greekSalade.webp";
import lemonDessert from "../assets/lemonDessert.jpeg";
import bruschetta from "../assets/bruschetta.jpg";
import { NavLink } from "react-router-dom";
import "./Styles/Order.css";

export default function order() {
  return (
    <>
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
    </>
  );
}
