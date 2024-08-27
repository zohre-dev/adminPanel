import { FC, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { Flex } from "antd";
import { publicRoutes } from "./publicRoutes";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>([]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setCurrentRoute(userToken ? privateRoutes : publicRoutes);
  }, []);

  if (!currentRoute.length) {
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
  const routes = createBrowserRouter(currentRoute);

  return <RouterProvider router={routes} />;
};
