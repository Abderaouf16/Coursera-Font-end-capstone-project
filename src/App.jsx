import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ReserveTable from "./routes/ReserveTable";
import OrderPlatete from "./routes/OrderPlate";
import { ChakraProvider } from "@chakra-ui/react";
import { MealProvider } from './Components/Context/MealContext';

import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
          <MealProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderMeal" element={<OrderPlatete />} />
          <Route path="/ReserveTable" element={<ReserveTable />} />
        </Routes>
          </MealProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
