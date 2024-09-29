import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import HomePage from "./pages/HomePage";
import Breweries from "./pages/Breweries";
import SpecialtyCoffeeShops from "./pages/SpecialtyCoffeeShops";
import Brunch from "./pages/Brunch";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route
          path="/specialty-coffee-shops"
          element={<SpecialtyCoffeeShops />}
        />
        <Route path="/brunch" element={<Brunch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
