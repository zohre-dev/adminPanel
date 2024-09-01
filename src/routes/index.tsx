import { FC, useEffect, useMemo, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { Flex } from "antd";
import { publicRoutes } from "./publicRoutes";
<<<<<<< HEAD
import { useAppSelector } from "../hooks/hook";
import { USER_INFO } from "../constants/localStorageKeys";
import { patcher } from "../store/store";
import { setUser } from "../feachers/auth/authSlice";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = useAppSelector((store) => store.auth.token);
=======
import { USER_TOKEN } from "../constants/localStorageKeys";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = localStorage.getItem(USER_TOKEN);
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754

  useEffect(() => {
    setCurrentRoute(userToken ? privateRoutes : publicRoutes);
  }, [userToken]);

<<<<<<< HEAD
  // useEffect(() => {
  //   const { userToken, userName } = JSON.parse(
  //     localStorage.getItem(USER_INFO) || "{}"
  //   );
  //   if (userToken && userName)
  //     patcher(setUser({ name: userName, token: userToken }));
  // }, []);
  const routes = useMemo(() => {
    return currentRoute && createBrowserRouter(currentRoute);
  }, [currentRoute]);

=======
  const routes = useMemo(() => {
    return currentRoute && createBrowserRouter(currentRoute);
  }, [currentRoute]);
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
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
<<<<<<< HEAD

=======
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
  return <RouterProvider router={routes} />;
};
