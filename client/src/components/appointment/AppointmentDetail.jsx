import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { APPOINTMENT_API_URL } from "../../constants";
import AppointmentForm from "./AppointmentForm"

function AppointmentDetails () {
  const [editing, setEditing] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [session, setSession] = useState(null);
  const { id } = useParams();

  const toggleEdit=() => {
    setEditing(!editing)
  }

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

  const handleNewSubmit = async (rawData) => {

    const appointmentData = {
      message: rawData.message,
      date: rawData.date,
      from: rawData.from,
      to: rawData.to,
      session: session
    };


    const response = await fetch(`${APPOINTMENT_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      const { id } = await response.json();
      location.reload()
    } else {
      console.log("An error occurred.");
    }
  };

  if (!appointment) return (
    <>
      <h2>This appointment does not exist</h2>
      <Link to="/appointments">Back to Appointments</Link>
    </>
  )

  return (
    <>
      <div className= "show-border">
        <h2>{appointment.appointment.date.slice(0,10)} {appointment.appointment.day}</h2>
        <h3>{appointment.appointment.from} to {appointment.appointment.to}</h3>
        {editing ? (
          <>
            <AppointmentForm
              appointment={appointment.appointment}
              onSubmit={handleNewSubmit}
              buttonText="Update"
            />
            <button type="button" onClick={toggleEdit}>Cancel</button>
          </>
        ):(
          <button type="button" onClick={toggleEdit}>Edit Appointment</button>
        )}
        {appointment.hasOwnProperty("session") ? (
          <>
            <p>This appointment has a session</p>
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