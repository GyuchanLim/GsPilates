import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APPOINTMENT_API_URL } from "../../constants";
import AppointmentForm from "./AppointmentForm"

function NewAppointmentForm() {
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleNewSubmit = async (rawData) => {
    setMessage(rawData.message)
    setDate(rawData.date)
    setFrom(rawData.from)
    setTo(rawData.to)

    const appointmentData = { message, date, from, to };

    const response = await fetch(APPOINTMENT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      const { id } = await response.json();
      navigate(`/appointments/${id}`);
    } else {
      console.log("An error occurred.");
    }
  };

  return (
    <AppointmentForm
      headerText="Create a New Appointment"
      onSubmit={handleNewSubmit}
      buttonText="Create Appointment"
    />
  );
}

export default NewAppointmentForm;