import { Badge, Button, Dropdown, Flex, Image, Space } from "antd";

import {
  BellOutlined,
  DownOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { useAppSelector } from "../../../../hooks/hook";
import { selectUsername } from "../../../../feachers/auth/authSlice";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { BreakPoints } from "../../../../constants/breakPointsNumber";
import { useMainLayoutContext } from "../../context";

const AppHeader: React.FC = () => {
  const userName = useAppSelector(selectUsername);
  const isLabtop = useMediaQuery(BreakPoints.labtop); //greater than 991 is laptob size
  const { dispatch } = useMainLayoutContext();
  const { setOpenDrawer } = dispatch;

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <Flex
      align="center"
      justify={!isLabtop ? "space-between" : "end"}
      className="bg-red-400 px-8 py-3 w-full"
    >
      {!isLabtop && (
        <MenuOutlined
          className="cursor-pointer"
          onClick={() => setOpenDrawer(true)}
        />
      )}

      <Flex align="center" gap="small">
        <Button
          className="headerButtons"
          icon={
            <Badge dot={true}>
              <BellOutlined />
            </Badge>
          }
        />
        <Button className="headerButtons" icon={<MailOutlined />} />
        <Flex
          className="border rounded-md bg-white h-10 px-2"
          gap="small"
          align="center"
        >
          <Image
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            width={24}
            height={24}
          />
          <Dropdown
            menu={{
              items,
            }}
          >
            <Space>
              {userName}
              <DownOutlined height={24} width={24} />
            </Space>
          </Dropdown>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AppHeader;
