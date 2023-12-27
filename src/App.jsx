import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { initFlowbite } from "flowbite";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/landing_pages"; // Make sure the filename matches

const App = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/landing_page" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
