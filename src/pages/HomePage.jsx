import Header from "../components/Header";
import Home from "../components/Home";
const HomePage = () => {
  return (
    <div className="bg-mobile sm:bg-tablet md:bg-desktop bg-center bg-cover min-h-screen">
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
