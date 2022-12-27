import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Destinations from "./pages/Destinations";
import Crews from "./pages/Crews";
import Technology from "./pages/Technology";
import { useState } from "react";

const App = (props) => {
  return (
    <div className="">
      {/* <Header /> */}
      <Routes>
        {/* <Route path="*" element={} /> */}
        <Route exact path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crews />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
