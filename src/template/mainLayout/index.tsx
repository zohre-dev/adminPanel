import { Layout } from "antd";
<<<<<<< HEAD

=======
import AppSider from "./components/AppSider";
import AppHeader from "./components/AppHeader";
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { FC } from "react";
import { MainLayoutProvider } from "./context";
<<<<<<< HEAD
import AppSider from "./components/AppSider";
import AppHeader from "./components/AppHeader";
=======
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754

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
