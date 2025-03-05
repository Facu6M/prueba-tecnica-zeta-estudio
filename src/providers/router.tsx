import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
const router = createBrowserRouter([
  {
    element: <AppWrapper />,
    path: "/",
    children: [{ index: true, element: <Index /> }],
  },
]);

function AppWrapper() {
  return (
    <>
      <App />
    </>
  );
}

export default function Router() {
  return <RouterProvider router={router} />;
}
