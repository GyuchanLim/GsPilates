import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../HomePage";
import PricesPage from "./PricesPage";
import ContactsPage from "./ContactsPage";
import AppointmentPage from "./appointment/AppointmentPage";
import AppointmentDetail from "./appointment/AppointmentDetail";
import NewAppointment from "./appointment/NewAppointment";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/appointments" element={<AppointmentPage />} />
      <Route path="/appointments/:id" element={<AppointmentDetail />} />
      <Route path="/appointments/new" element={<NewAppointment />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )
}

export default AppRoutes;
