import { ReactNode } from "react";
import "../styles/toasts.css";
import { Toaster } from "sonner";

export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        richColors
        position="bottom-center"
        theme="light"
        duration={3000}
      />
    </>
  );
}
