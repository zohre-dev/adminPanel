import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { dropDownItems } from "./items";

const AppDropDown = () => {
  return (
    <Dropdown menu={dropDownItems}>
      <Space>
        Zohre Mehrabi
        <DownOutlined height={24} width={24} />
      </Space>
    </Dropdown>
  );
};

export default AppDropDown;
