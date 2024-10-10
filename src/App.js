// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import SaleImage from "./components/SaleImage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <SaleImage />
      <Recommended />
      <Topics />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
