import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apple from "./Apple.jsx";
import IceCreamSandwich from "./IceCreamSandwich.jsx";
import HotCheetos from "./HotCheetos.jsx";
import VendingMachine from "./VendingMachine.jsx";
import "./App.css";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<VendingMachine />}
          />
          <Route
            path="/apple"
            element={<Apple />}
          />
          <Route path="/ice-cream-sandwich" element={<IceCreamSandwich />} />
          <Route path="/hot-cheetos" element={<HotCheetos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
