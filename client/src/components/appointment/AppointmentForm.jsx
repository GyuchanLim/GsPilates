import { useState } from "react";
import PropTypes from "prop-types";

function AppointmentForm ({ appointment, headerText, onSubmit, buttonText }) {
  const [formData, setFormData] = useState(
    appointment || {
      message: "",
      date: "",
      from: "",
      to: "",
    }
  );

  return (
    <div>
      <h2>{headerText}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <div>
          <label htmlFor="messageInput">Message:</label>
          <input
            id="messageInput"
            type="text"
            value={formData.message}
            onChange={(e) => setFormData({
              ...formData,
              message: e.target.value,
            })}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Day:</label>
          <input 
            type="date"
            id="start"
            name=""
            value={formData.date}
            onChange={(e) => setFormData({
              ...formData,
              date: e.target.value,
            })}
            required
          />
        </div>
        <div>
          <label htmlFor="fromInput">From:</label>
          <input
            id="fromInput"
            type="text"
            value={formData.from}
            onChange={(e) => setFormData({
              ...formData,
              from: e.target.value,
            })}
            required
          />
        </div>
        <div>
          <label htmlFor="toInput">To:</label>
          <input
            id="toInput"
            type="text"
            value={formData.to}
            onChange={(e) => setFormData({
              ...formData,
              to: e.target.value,
            })}
            required
          />
        </div>
        <div>
          <button type="submit">{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

AppointmentForm.propTypes = {
  appointment: PropTypes.shape({
    message: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  headerText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

AppointmentForm.defaultProps = {
  appointment: null,
};

export default AppointmentForm;
