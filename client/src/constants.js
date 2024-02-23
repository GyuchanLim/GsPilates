// For Vite to pick up env variables, it has to have VITE prefix

export const API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_POST_API_URL;

export const APPOINTMENT_API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_API_URL+"appointments";

export const SESSION_API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_API_URL+"sessions";