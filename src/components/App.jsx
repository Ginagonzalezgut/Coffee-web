import { Route, Routes, useLocation } from "react-router-dom";
import "../scss/App.scss";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import HomePage from "./pages/HomePage";
import Breweries from "./pages/Breweries";
import SpecialtyCoffeeShops from "./pages/SpecialtyCoffeeShops";
import Brunch from "./pages/Brunch";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Gelato from "./pages/Gelato";
import LargeGroups from "./pages/LargeGroups";
import Rooftops from "./pages/Rooftops";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/gelato" element={<Gelato />} />
        <Route path="/large-groups" element={<LargeGroups />} />
        <Route
          path="/specialty-coffee-shops"
          element={<SpecialtyCoffeeShops />}
        />
        <Route path="/brunch" element={<Brunch />} />
        <Route path="/rooftops" element={<Rooftops />} />
      </Routes>
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
