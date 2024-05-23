import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SlideBar from "./components/SlideBar";
import LiveAuction from "./components/LiveAuction";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Items from "./data/Items";
import Product from "./pages/Product";
import { ItemsProvider } from "./context/ItemsContext";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <hr className="p-5" />
                <SlideBar />
                <LiveAuction />
                <Explore />
              </div>
            }
          />
          <Route
            path="/products-list"
            element={
              <ItemsProvider>
                <Items />
              </ItemsProvider>
            }
          />
          <Route
            path="/product"
            element={
              <ItemsProvider>
                <Product />
              </ItemsProvider>
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
