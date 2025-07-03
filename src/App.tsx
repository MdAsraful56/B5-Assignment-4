import { Outlet } from "react-router";
import "./App.css";
import Footer from "./layout/components/Footer";
import Navbar from "./layout/components/Navbar";

function App() {
  return (
    <div className="">
      <div className="" style={{ fontFamily: "JetBrains Mono" }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
