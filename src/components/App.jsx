import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "../scss/App.scss";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import API from "../services/api";
import Shop from "./Shop";
import Breweries from "./Breweries";

function App() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    API.getShops().then((data) => {
      setShops(data.results);
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage shops={shops} />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/breweries" element={<Breweries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
