import { RouteObject } from "react-router-dom";
import { ROUTES } from "./routesUrls";

import CustomersPage from "../pages/private/CustomersPage";
import { MainLayout } from "../template/mainLayout";
import NewCustomerManuallyPage from "../pages/private/NewCustomerManuallyPage";
import EditCustomerPage from "../pages/private/EditCustomerPage";
import NewCustomerByFilePage from "../pages/private/NewCustomerByFilePage";
import UploadWrongPage from "../pages/private/UploadWrongPage";
import UploadingPage from "../pages/private/UploadingPage";

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
        path: ROUTES.uploadWrong,
        element: <UploadWrongPage />,
      },
      {
        path: ROUTES.uploading,
        element: <UploadingPage />,
      },
    ],
  },
];
