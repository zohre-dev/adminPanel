import { Badge, Button, Dropdown, Flex, Image, Typography } from "antd";

import { BellOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";
import ChevronDown from "../../../../assets/img/chevronDown.png";

import { useAppSelector } from "../../../../hooks/hook";
import { selectUsername } from "../../../../feachers/auth/authSlice";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { BreakPoints } from "../../../../constants/breakPointsNumber";
import { useMainLayoutContext } from "../../context";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  const { Text } = Typography;
  const userName = useAppSelector(selectUsername);
  const isLabtop = useMediaQuery(BreakPoints.labtop); //greater than 991 is laptob size
  const { dispatch } = useMainLayoutContext();
  const { setOpenDrawer, setOpenNotificationDrawer, setOpenCommentsDrawer } =
    dispatch;

  const items = [
    {
      key: "1",
      label: <Link to="/">Account</Link>,
    },

    {
      key: "2",
      danger: true,
      label: "Logout",
    },
  ];

  return (
    <Flex
      align="center"
      justify={!isLabtop ? "space-between" : "end"}
      className="px-8 py-3 w-full"
    >
      {!isLabtop && (
        <MenuOutlined
          className="cursor-pointer"
          onClick={() => setOpenDrawer(true)}
        />
      )}

      <Flex align="center" gap="small">
        <Button
          onClick={() => setOpenNotificationDrawer(true)}
          className="headerButton"
          icon={
            <Badge dot={true}>
              <BellOutlined />
            </Badge>
          }
        />
        <Button
          className="headerButton"
          icon={<MailOutlined />}
          onClick={() => setOpenCommentsDrawer(true)}
        />
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
            <Flex justify="center" gap={8} align="center">
              <Text>{userName}</Text>
              <Image src={ChevronDown} height={24} width={24} />
            </Flex>
          </Dropdown>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AppHeader;
