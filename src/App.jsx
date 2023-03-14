import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Destinations from "./pages/Destinations";
import Crews from "./pages/Crews";
import Technology from "./pages/Technology";
import { useEffect, useState } from "react";

const App = () => {
  const { pathname } = useLocation();

  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setCurrentPage("home");
    }
    if (pathname === "/destination") {
      setCurrentPage("destination");
    }
    if (pathname === "/crew") {
      setCurrentPage("crew");
    }
    if (pathname === "/technology") {
      setCurrentPage("technology");
    }
  }, [pathname]);
  return (
    <div
      className={
        currentPage === "home"
          ? "bg-mobile sm:bg-tablet md:bg-desktop bg-center bg-cover min-h-screen"
          : currentPage === "destination"
          ? "bg-mobileDestination sm:bg-tabletDestination md:bg-desktopDestination bg-center bg-cover min-h-screen -screen"
          : currentPage === "crew"
          ? "bg-mobileCrew sm:bg-tabletCrew md:bg-desktopCrew  bg-cover bg-center min-h-screen"
          : currentPage === "technology"
          ? "bg-mobileTech sm:bg-tabletTech md:bg-desktopTech bg-cover bg-center min-h-screen"
          : ""
      }
    >
      <Header />
      <Routes>
        {/* <Route path="*" element={} /> */}
        <Route index exact path="/home" element={<HomePage />} />

        <Route exact path="/home" element={<HomePage />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crews />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
