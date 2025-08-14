import { createBrowserRouter } from "react-router-dom";
import { Users, UserDetails } from "../scenes";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, loader: () => null, element: <Users /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <UserDetails /> },
    ],
  },
]);
