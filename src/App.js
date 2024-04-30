import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SlideBar from "./components/SlideBar";
import LiveAuction from "./components/LiveAuction";
import Footer from "./components/Footer";
import Explore from "./components/Explore";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <hr className="p-5" />
      <SlideBar />
      <LiveAuction />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
