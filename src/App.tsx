import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Display } from "./Display/Display";
import { Interface } from "./Interface/Interface";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Interface />,
  },
  {
    path: "display",
    element: <Display />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
