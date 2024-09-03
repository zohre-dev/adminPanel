import {
  HomeOutlined,
  MailOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

export const menuItemsTop = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "DASHBOARD",
  },
  {
    key: "2",
    icon: <UsergroupDeleteOutlined />,
    label: "CUSTOMERS",
  },
  { key: "3", icon: <PieChartOutlined />, label: "ANALYTICS" },
];
//*************************************************/
export const menuItemsBottom = [
  { key: "1", icon: <MailOutlined />, label: "MESSAGE" },
  { key: "2", icon: <SettingOutlined />, label: "SETTING" },
  { key: "3", icon: <QuestionCircleOutlined />, label: "HELP CENTER" },
];
