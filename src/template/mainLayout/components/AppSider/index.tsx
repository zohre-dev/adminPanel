import Sider from "antd/es/layout/Sider";
import AppMenu from "../AppMenu";
import { FC } from "react";
import { useMainLayoutContext } from "../../context";

const AppSider: FC = () => {
  const { values } = useMainLayoutContext();
  const { collapsed } = values;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <AppMenu />
    </Sider>
  );
};
4;
export default AppSider;
