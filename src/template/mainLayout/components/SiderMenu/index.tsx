import { menuItems } from "./items";
import { Menu } from "antd";

const SiderMenu = () => {
  return (
    <>
      <Menu
        items={menuItems}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
      />
    </>
  );
};

export default SiderMenu;
