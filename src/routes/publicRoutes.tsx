import { Navigate, RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";
import LoginLayout from "../template/loginLayout";
import LoginPage from "../pages/public/LoginPage";

export const publicRoutes: RouteObject[] = [
  {
    path: ROUTES.login,
    element: <LoginLayout />,
    children: [
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.login} />,
  },
];
