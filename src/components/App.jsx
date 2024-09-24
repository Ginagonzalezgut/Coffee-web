import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CoffeeForm from "./CoffeeForm";
import CoffeeList from "./CoffeeList";
import Header from "./Header";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [shops, setShops] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/coffee")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001/shops")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShops(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.results);
      });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CoffeeList coffees={coffees} />} />
        <Route
          path="/coffee/new"
          element={<CoffeeForm shops={shops} countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
