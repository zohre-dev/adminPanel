import { RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";

import CustomersPage from "../pages/private/CustomersPage";
import { MainLayout } from "../template/mainLayout";

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <CustomersPage />,
      },
    ],
  },
];
