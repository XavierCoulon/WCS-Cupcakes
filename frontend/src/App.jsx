import { Routes, Route } from "react-router-dom";
import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import CupcakeList from "@pages/CupcakeList";
import CupcakeDetails from "@pages/CupcakeDetails";
import Instructions from "@pages/Instructions";

import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cupcakes" element={<CupcakeList />} />
          <Route path="/cupcakes/:id" element={<CupcakeDetails />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </main>
      <NavBar />
    </>
  );
}

export default App;
