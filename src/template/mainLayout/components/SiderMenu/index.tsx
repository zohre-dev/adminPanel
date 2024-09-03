import { Typography } from "antd";
import { menuItemsBottom, menuItemsTop } from "./items";
import { Menu } from "antd";

const SiderMenu = () => {
  const { Text } = Typography;
  return (
    <>
      <Menu items={menuItemsTop} theme="dark" mode="inline" className="px-8" />

      <Text className="text-[#495057] text-sm ml-8 font-medium">SETTINGS</Text>

      <Menu
        items={menuItemsBottom}
        theme="dark"
        mode="inline"
        className="px-8"
      />
    </>
  );
};

export default SiderMenu;
