import './App.css';
import HeroSection from './Components/HeroSection';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Services from './Components/Services';
import Signup from './Components/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/services" element={<Services />} />
          <Route  path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
