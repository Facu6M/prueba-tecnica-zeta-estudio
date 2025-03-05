import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./providers/router";
import ToastProvider from "./providers/Toasts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </ToastProvider>
  </React.StrictMode>
);
