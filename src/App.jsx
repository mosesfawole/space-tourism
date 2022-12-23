import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Destinations from "./pages/Destinations";
import Crews from "./pages/Crews";
import Technology from "./pages/Technology";
const App = () => {
  return (
    <div className="bg-mobile md:bg-desktop sm:bg-tablet bg-cover bg-center">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/crew" element={<Crews />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
};

export default App;
