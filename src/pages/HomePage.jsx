import Header from "../components/Header";
import Home from "../components/Home";
const HomePage = () => {
  return (
    <div className="bg-mobile sm:bg-tablet md:bg-desktop bg-center bg-cover h-[100vh]">
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
