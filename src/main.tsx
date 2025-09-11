import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";

// Get the root element
const container = document.getElementById("root");

// Check if the root element exists
if (!container) {
  throw new Error("Failed to find the root element. Your index.html is missing an element with id='root'");
}

// Create the root
const root = createRoot(container);

// Render the app with error boundary and strict mode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Handle runtime errors with an error boundary
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
  // Here you could also integrate with an error tracking service like Sentry
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Here you could also integrate with an error tracking service
});
