import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="" style={{ fontFamily: "JetBrains Mono" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
