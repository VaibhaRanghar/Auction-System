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
import { AuthProvider } from "./context";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <AuthProvider>
        <ItemsProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <div>
                    <NavBar />
                    <Login />
                  </div>
                }
              />
              <Route
                path="/login"
                element={
                  <div>
                    <NavBar />
                    <Login />
                  </div>
                }
              />
              <Route
                path="/register"
                element={
                  <div>
                    <NavBar />
                    <Register />
                  </div>
                }
              />
              <Route
                path="/Home"
                element={
                  <div>
                    <NavBar />
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
                  <>
                    <NavBar />
                    <Items />
                  </>
                }
              />
              <Route
                path="/product"
                element={
                  <>
                    <NavBar />
                    <Product />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </ItemsProvider>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
