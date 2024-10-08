import { Layout } from "antd";
import AppSider from "./components/AppSider";
import AppHeader from "./components/AppHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { FC } from "react";
import { MainLayoutProvider } from "./context";
import NotificationDrawer from "./components/NotificationDrawer";
import CommentsDrawer from "./components/CommentsDrawer";
import { GlobalContextProvider } from "../../globalContext/context";

export const MainLayout: FC = () => {
  return (
    <GlobalContextProvider>
      <MainLayoutProvider>
        <Layout className="min-h-screen">
          <NotificationDrawer />
          <CommentsDrawer />
          <AppSider />
          <Layout>
            <AppHeader />
            <Content className="px-8 py-4">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </MainLayoutProvider>
    </GlobalContextProvider>
  );
};
