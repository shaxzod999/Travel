import React from "react";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import TheSilkRoads from "./pages/TheSilkRoads";
import Card from "./components/TheSilkRoads/Card";
import Stories from "./pages/TheSilkRoads2";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage") || "en";
    i18n.changeLanguage(savedLang);

    const params = new URLSearchParams(location.search);
    if (!params.has("lang")) {
      params.set("lang", savedLang);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [i18n, location, navigate]);
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Stories/" element={<Stories />} />
        <Route path="/The-Silk-Roads/Card/" element={<Card />} />
        <Route path="/The-Silk-Roads/" element={<TheSilkRoads />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
