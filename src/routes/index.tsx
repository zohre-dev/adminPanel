import { FC, useEffect, useMemo, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { Flex } from "antd";
import { publicRoutes } from "./publicRoutes";
import { USER_TOKEN } from "../constants/localStorageKeys";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = localStorage.getItem(USER_TOKEN);

  useEffect(() => {
    setCurrentRoute(userToken ? privateRoutes : publicRoutes);
  }, [userToken]);

  const routes = useMemo(() => {
    return currentRoute && createBrowserRouter(currentRoute);
  }, [currentRoute]);
  if (!routes) {
    return (
      <Flex
        justify="center"
        align="center"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </Flex>
    );
  }
  return <RouterProvider router={routes} />;
};
