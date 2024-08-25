import { Layout } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <Layout className="min-h-screen">
      <AppSider />
      <Layout>
        <AppHeader />
        <Content className="px-8 py-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
