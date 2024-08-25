import { RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";

import { MainLayout } from "../template/mainLayout/components/mainLayout";
import CustomersPage from "../pages/private/CustomersPage";

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
