import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import PricesPage from "./PricesPage";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import SchedulePage from "./SchedulePage";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/contact" element={<ContactsPage />} />
    </Routes>
  )
}

export default AppRoutes;
