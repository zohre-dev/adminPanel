import { Typography } from "antd";
import { menuItemsBottom, menuItemsTop } from "./items";
import { Menu } from "antd";

const SiderMenu = () => {
  const { Text } = Typography;
  return (
    <>
      <Menu items={menuItemsTop} theme="dark" mode="inline" />

      <Text className="text-[#495057] text-sm ml-8 font-medium mt-8">
        SETTINGS
      </Text>

      <Menu items={menuItemsBottom} theme="dark" mode="inline" />
    </>
  );
};

export default SiderMenu;
