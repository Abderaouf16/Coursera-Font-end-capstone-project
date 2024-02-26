import React, { createContext, useState, useContext } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const setMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <MealContext.Provider value={{ selectedMeal, setMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext);
};
