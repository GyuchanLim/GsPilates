import React, { useEffect, useState } from "react";
import { APPOINTMENT_API_URL } from "../../constants";
import { Link } from "react-router-dom";

function AppointmentPage () {
  const [appointments, setAppointments] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  // Fetch posts from the API
  useEffect(() => {
    async function loadAppointments() {
      try {
        console.log(APPOINTMENT_API_URL);
        const response = await fetch(`${APPOINTMENT_API_URL}`);
        if (response.ok) {
          const json = await response.json();
          setAppointments(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred. Awkward...");
        console.log("An error occurred:", e);
      } finally {
        setLoading(false);
      }
    }
    loadAppointments();
  }, []);

  return(
    <>
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id} className="post-container">
            <h2>{appointment.classes_id}</h2>
            <Link to={'/appointments/' + appointment.id}>{appointment.date.slice(0,10)} {appointment.day}, {appointment.from}-{appointment.to}</Link>
            <p>{appointment.message}</p>
          </div>
        ))}
    </div>
  </>
  )
}

export default AppointmentPage;
