// ── Slide 32: Axios best practices ───────────────────────────────
// ONE configured axios instance for the whole app. Components never
// call axios directly – they call feature api.js functions that use
// this client. Benefits: single base URL, shared headers, one place
// for auth tokens and error logging.
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api", // Vite proxies /api → json-server (later: ASP.NET Core)
  timeout: 10000,
});

// REQUEST interceptor – in Lecture 04 this attaches the real JWT.
apiClient.interceptors.request.use((config) => {
  const raw = localStorage.getItem("campuseats-user");
  if (raw) {
    const user = JSON.parse(raw);
    // Demo token; the backend lectures replace this with a real JWT.
    config.headers.Authorization = `Bearer demo-token-for-${user.role}`;
  }
  return config;
});

// RESPONSE interceptor – central place to log / map errors.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API error]", error.config?.url, error.message);
    return Promise.reject(error);
  }
);
