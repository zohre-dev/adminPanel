import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { items } from "./dropDownItems";

const AppDropDown = () => {
  return (
    <Dropdown menu={{ items }}>
      <Space>
        Zohre Mehrabi
        <DownOutlined height={24} width={24} />
      </Space>
    </Dropdown>
  );
};

export default AppDropDown;
