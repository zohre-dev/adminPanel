import Sider from "antd/es/layout/Sider";

import { FC, useState } from "react";
import { useMainLayoutContext } from "../../context";
import { Button, Drawer } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { BreakPoints } from "../../../../constants/breakPointsNumber";
import SiderMenu from "../SiderMenu";
import { Link } from "react-router-dom";

const AppSider: FC = () => {
  const { values, dispatch } = useMainLayoutContext();
  const { collapsed, openDrawer } = values;
  const { setCollapsed, setOpenDrawer } = dispatch;
  const isLabtop = useMediaQuery(BreakPoints.labtop); //greater than 991 is laptob size

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  if (!isLabtop) {
    return (
      <Drawer
        className="px-0 py-0"
        title="Basic Drawer"
        open={openDrawer}
        placement="left"
        onClose={() => setOpenDrawer(false)}
      >
        <SiderMenu />
      </Drawer>
    );
  }
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="relative p-8 "
      width={240}
    >
      <Button
        className={`headerButtons z-10 absolute  top-[12px]   ${
          collapsed ? "left-[60px]" : "left-[180px]"
        }`}
        icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        onClick={handleClick}
      />
      <SiderMenu />
      <br />
      <br />
      <Link to="/client" className="text-white">
        Go To Client Page
      </Link>
      <br />
    </Sider>
  );
};
4;
export default AppSider;
