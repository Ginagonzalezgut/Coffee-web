import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import CoffeeList from "./CoffeeList";
import API from "../services/api";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [shops, setShops] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    API.getCoffee().then((data) => {
      setCoffees(data.results);
    });
  }, []);

  useEffect(() => {
    API.getShops().then((data) => {
      setShops(data.results);
    });
  }, []);

  useEffect(() => {
    API.getCountries().then((data) => {
      setCountries(data.results);
    });
  }, []);

  // useEffect(() => {
  //   fetch(`${apiURL}/shop/:id`)
  //     .then((response) => response.json)
  //     .then((data) => data.shop);
  // });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage shops={shops} />} />
        <Route path="/shop/:id" element={<CoffeeList coffees={coffees} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
