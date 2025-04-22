/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Programs from "./pages/Programs";
import ServiceDetails from "./pages/ServiceDetails";
import Service from "./pages/Service";
import PricingDetail from "./pages/PricingDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/school" element={<Programs />} />
        <Route path="/school/:section" element={<PricingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
