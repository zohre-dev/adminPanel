import { Layout } from "antd";
import AppSider from "./components/AppSider";
import AppHeader from "./components/AppHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { FC } from "react";
import { MainLayoutProvider } from "./context";

export const MainLayout: FC = () => {
  return (
    <MainLayoutProvider>
      <Layout className="min-h-screen">
        <AppSider />
        <Layout>
          <AppHeader />
          <Content className="px-8 py-4">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </MainLayoutProvider>
  );
};
