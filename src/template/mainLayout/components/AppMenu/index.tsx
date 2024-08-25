import { menuItems } from "./menuItems";
import { Menu } from "antd";

const AppMenu = () => {
  return (
    <Menu
      items={menuItems}
      defaultSelectedKeys={["2"]}
      theme="dark"
      mode="inline"
    />
  );
};

export default AppMenu;
