import {
  HomeOutlined,
  MailOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

export const menuItems = [
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
  { key: "4", icon: <MailOutlined />, label: "MESSAGE" },
  { key: "5", icon: <SettingOutlined />, label: "SETTING" },
  { key: "6", icon: <QuestionCircleOutlined />, label: "HELP CENTER" },
];
