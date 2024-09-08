// index.js or main.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import appRouter from './App'; // Import your router setup
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the entire App with RouterProvider */}
    <RouterProvider router={appRouter} />
  </StrictMode>
);
