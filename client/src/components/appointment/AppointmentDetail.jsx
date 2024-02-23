import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { APPOINTMENT_API_URL, SESSION_API_URL } from "../../constants";

function AppointmentDetails () {
  const [appointment, setAppointment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentAppointment = async () => {
      try{
        const response = await fetch(`${APPOINTMENT_API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setAppointment(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("An Error has occurred:", e);
      }
    };
    fetchCurrentAppointment();
  }, [id]);

  // EXPERIMENTING UPDATE
  const [note, setNote] = useState("Testing Message Update PATCH");
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = { note };

    const response = await fetch(`${SESSION_API_URL}/${appointment.session.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });
  }
  // EXPERIMENTING UPDATE

  if (!appointment) return <h2>This appointment does not exist</h2>

  return (
    <>
      <div className= "show-border">
        <h2>{appointment.appointment.date.slice(0,10)} {appointment.appointment.day}</h2>
        <h3>{appointment.appointment.from} to {appointment.appointment.to}</h3>
        {appointment.hasOwnProperty("session") ? (
          <>
            <p>This appointment has a session</p>
            <p>{appointment.session.note}</p>
          </>
        ):(
          <p>This appointment does not have a session</p>
        )}
        <Link to="/appointments">Back to Appointments</Link>
      </div>
    </>
  )
}

export default AppointmentDetails;