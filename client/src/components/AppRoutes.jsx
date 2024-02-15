import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../HomePage";
import PricesPage from "./PricesPage";
import ContactsPage from "./ContactsPage";
import AppointmentPage from "./class/AppointmentPage";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/contact" element={<ContactsPage />} />
    </Routes>
  )
}

export default AppRoutes;
