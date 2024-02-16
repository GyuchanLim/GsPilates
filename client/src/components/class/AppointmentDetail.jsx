import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { APPOINTMENT_API_URL } from "../../constants";

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

  if (!appointment) return <h2>This appointment does not exist</h2>

  return (
    <div>
      <h2>{appointment.appointment.day} {appointment.appointment.from} to {appointment.appointment.to}</h2>
      <p>{appointment.session.note}</p>
      <Link to="/appointment">Back to Appointments</Link>
    </div>
  )
}

export default AppointmentDetails;