import {
  HomeOutlined,
  MailOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Image, MenuProps } from "antd";
import Logo from "../../../../assets/img/Logo.png";

export const menuItems: MenuProps["items"] = [
  {
    key: "0",
    label: <Image src={Logo} />,
  },
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
  {
    key: "3",
    icon: <PieChartOutlined />,
    label: "ANALYTICS",
  },
  {
    key: "settings",
    type: "group",
    label: (
      <span className="text-[#495057] text-sm font-medium  mt-8">SETTINGS</span>
    ),
    children: [
      {
        key: "4",
        icon: <MailOutlined />,
        label: "MESSAGE",
      },
      {
        key: "5",
        icon: <SettingOutlined />,
        label: "SETTING",
      },
      {
        key: "6",
        icon: <QuestionCircleOutlined />,
        label: "HELP CENTER",
      },
    ],
  },
];
