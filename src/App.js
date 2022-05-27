import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Navs from "./components/Navs";
function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/starred" element={<Starred />}></Route>
      </Routes>
    </div>
  );
}

export default App;
