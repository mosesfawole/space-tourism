import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Destinations from "./pages/Destinations";
import Crews from "./pages/Crews";
import Technology from "./pages/Technology";
const App = () => {
  return (
    <div className="bg-mobile md:bg-desktop sm:bg-tablet bg-cover bg-center">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crews />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

      <Home />
    </div>
  );
};

export default App;
