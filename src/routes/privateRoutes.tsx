import { RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";

<<<<<<< HEAD
=======
import { MainLayout } from "../template/mainLayout";
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
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
