import React, { useEffect, useState } from "react";
import { APPOINTMENT_API_URL } from "../../constants";

function AppointmentPage () {
  const [appointments, setAppointments] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  // Fetch posts from the API
  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await fetch(APPOINTMENT_API_URL);
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
            <p>{appointment.day}</p>
            <p>From:{appointment.from} To:{appointment.to}</p>
            <p>{appointment.message}</p>
          </div>
        ))}
    </div>
  </>
  )
}

export default AppointmentPage;
