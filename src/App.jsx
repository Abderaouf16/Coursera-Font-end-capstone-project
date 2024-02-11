import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ReserveTable from "./routes/ReserveTable";

import "./App.css";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReserveTable" element={< ReserveTable/>} />
      </Routes>
    </>
  );
}

export default App;
