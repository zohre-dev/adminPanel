import { FC, useEffect, useMemo, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { Flex } from "antd";
import { publicRoutes } from "./publicRoutes";
import { useAppSelector } from "../hooks/hook";
import { selectUserToken, setUser } from "../feachers/auth/authSlice";
import { USER_INFO } from "../constants/localStorageKeys";
import { patcher } from "../store/store";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = useAppSelector(selectUserToken);

  useEffect(() => {
    setCurrentRoute(userToken ? privateRoutes : publicRoutes);
    // setCurrentRoute(privateRoutes);
  }, [userToken]);

  useEffect(() => {
    const { userToken, userName } = JSON.parse(
      localStorage.getItem(USER_INFO) || "{}"
    );
    if (userToken && userName)
      patcher(setUser({ name: userName, token: userToken }));
  }, []);
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
