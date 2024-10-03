import { Navigate, RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";

import CustomersPage from "../pages/private/CustomersPage";
import { MainLayout } from "../template/mainLayout";
import NewCustomerManuallyPage from "../pages/private/NewCustomerManuallyPage";
import EditCustomerPage from "../pages/private/EditCustomerPage";
import NewCustomerByFilePage from "../pages/private/NewCustomerByFilePage";

import ShowCustomerPage from "../pages/private/ShowCustomerPage";
import Client from "../Chat/client";

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <CustomersPage />,
      },
      {
        path: ROUTES.customers,
        element: <CustomersPage />,
      },

      {
        path: ROUTES.newCustomer,
        element: <NewCustomerManuallyPage />,
      },
      {
        path: ROUTES.editCustomer,
        element: <EditCustomerPage />,
      },
      {
        path: ROUTES.newCustomerByFile,
        element: <NewCustomerByFilePage />,
      },

      {
        path: ROUTES.showCustomer,
        element: <ShowCustomerPage />,
      },
      {
        path: ROUTES.cilent,
        element: <Client />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.home} />,
  },
];
