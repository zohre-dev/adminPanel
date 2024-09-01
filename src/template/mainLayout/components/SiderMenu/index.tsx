import { menuItems } from "./items";
import { Menu } from "antd";

const SiderMenu = () => {
  return (
    <Menu
      items={menuItems}
      defaultSelectedKeys={["2"]}
      theme="dark"
      mode="inline"
    />
  );
};

export default SiderMenu;
