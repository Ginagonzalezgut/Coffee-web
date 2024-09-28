import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "../scss/App.scss";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import API from "../services/api";
import Shop from "./Shop";
import Breweries from "./Breweries";
import SpecialtyCoffeeShops from "./SpecialtyCoffeeShops";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route
          path="/specialty-coffee-shops"
          element={<SpecialtyCoffeeShops />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
