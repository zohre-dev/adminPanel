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
  const localToken = localStorage.getItem(USER_INFO);
  const sessionToken = sessionStorage.getItem(USER_INFO);

  // const getUserInfo = async ({userInfo,rememberMe}: {userInfo: { userName: string; userToken: string } | undefined  ; rememberMe: boolean;})
  interface IgetUserInfo {
    userInfo: { userName: string; userToken: string } | undefined;
    rememberMe: boolean;
  }
  const [trigger, { isLoading }] = useLazyGetMeQuery();
  const getUserInfo = async ({ userInfo, rememberMe }: IgetUserInfo) => {
    try {
      if (userInfo && userInfo?.userToken) {
        await trigger(userInfo.userToken).then((response) => {
          console.log("sanaz", response);
          if (response && response.isSuccess) {
            // patcher(
            //   setUser({
            //     name: userInfo.userName,
            //     token: userInfo.userToken,
            //     rememberChecked: rememberMe,
            //   })
            // );
            setCurrentRoute(privateRoutes);
          } else {
            setCurrentRoute(publicRoutes);
          }
        });
      } else {
        setCurrentRoute(publicRoutes);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const checkUser = async () => {
    if (localToken || sessionToken) {
      const userInfo = localToken
        ? JSON.parse(localToken)
        : sessionToken
        ? JSON.parse(sessionToken)
        : undefined;
      getUserInfo({ userInfo, rememberMe: !!localToken });
    } else {
      setCurrentRoute(publicRoutes);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  // let routes = undefined;
  // useEffect(() => {
  //   routes = currentRoute && createBrowserRouter(currentRoute);
  // }, [currentRoute]);
  const routes = useMemo(() => {
    return currentRoute && createBrowserRouter(currentRoute);
  }, [currentRoute]);

  if (!routes || isLoading) {
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
