import React from "react";
import greekSalad from "../assets/greekSalade.webp";
import lemonDessert from "../assets/lemonDessert.jpeg";
import bruschetta from "../assets/bruschetta.jpg";
import { NavLink } from "react-router-dom";
import "./Styles/Meals.css";
import { useMealContext } from "../Context/MealContext";

export default function order() {
  const meals = [
    {
      id: "1",
      mealName: "Greek Salad",
      mealImg: greekSalad,
      price: "$12.99",
      mealDescription:
        " The famous Greek salad of crispy lettuce, peppers, olives and  our Chicago styled feta cheese, garnished with crunchy garlic,  rosemary croutons ",
    },
    {
      id: "2",
      mealName: "Bruschetta",
      mealImg: bruschetta,
      price: "$5.99",
      mealDescription:
        " The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons",
    },
    {
      id: "3",
      mealName: "Lemon Dessert",
      mealImg: lemonDessert,
      price: "$5.00",
      mealDescription:
        " The famous Greek salad of crispy lettuce, peppers, olives and  our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons",
    },
  ];

  const { setMeal } = useMealContext();

  const handleOrderClick = (meal) => {
    setMeal(meal);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scrolling
    });
  };
  return (
    <>
      <section className="menu_section" id="Menu">
        <div className="menu_section-container">
          <div className="">
            <h1 className="menu-section-title">This Week's Specials</h1>
          </div>
          <div className="card-container">
            {meals.map((meal) => (
              <div className="card" key={meal.id}>
                <div className="card-img">
                  <img className="" src={meal.mealImg} alt="" />
                </div>
                <div className="card-title">
                  <h2>{meal.mealName}</h2>
                  <p>{meal.price}</p>
                </div>
                <p className="card-text"> {meal.mealDescription} </p>
                <NavLink
                  className="card-btn"
                  onClick={() => handleOrderClick(meal)}
                  to={{
                    pathname: "/OrderMeal",
                  }}
                >
                  Order Now
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
