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
import { useLazyGetMeQuery } from "../services/authAPi/authApi";

export const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteObject[]>();
  const userToken = useAppSelector(selectUserToken);
  // const rememberMe = useAppSelector(selectRememberMe);
  let rememberMe: boolean = false;
  const [trigger, { data }] = useLazyGetMeQuery();

  useEffect(() => {
    setCurrentRoute(userToken ? privateRoutes : publicRoutes);
  }, [userToken]);

  async function me(token: string) {
    await trigger(token).then((response) => {
      if (response.data) {
      } else {
      }
    });
  }

  useEffect(() => {
    if (localStorage.getItem(USER_INFO)) {
      rememberMe = true;
    } else if (sessionStorage.getItem(USER_INFO)) {
      rememberMe = false;
    }

    const { userToken, userName } = JSON.parse(
      localStorage.getItem(USER_INFO) ||
        sessionStorage.getItem(USER_INFO) ||
        "{}"
    );

    if (userToken && userName) {
      // const result = me(userToken);
      // console.log("result", result);
      patcher(
        setUser({
          name: userName,
          token: userToken,
          rememberChecked: rememberMe,
        })
      );
    }
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
