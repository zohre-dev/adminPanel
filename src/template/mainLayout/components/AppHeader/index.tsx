import { Badge, Button, Dropdown, Flex, Image, Typography } from "antd";

import { BellOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";
import ChevronDown from "../../../../assets/img/chevronDown.png";

import { useAppSelector } from "../../../../hooks/hook";
import { selectUsername } from "../../../../feachers/auth/authSlice";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { BreakPoints } from "../../../../constants/breakPointsNumber";
import { useMainLayoutContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { USER_INFO } from "../../../../constants/localStorageKeys";
import { ROUTES } from "../../../../routes/routesUrls";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../../globalContext/context";
import { io } from "socket.io-client";

const AppHeader: React.FC = () => {
  const { Text } = Typography;
  const userName = useAppSelector(selectUsername);
  const isLabtop = useMediaQuery(BreakPoints.labtop); //greater than 991 is laptob size
  const { dispatch, values: valuesMainLayoutContext } = useMainLayoutContext();
  const { comments } = valuesMainLayoutContext;
  const {
    setOpenDrawer,
    setOpenNotificationDrawer,
    setOpenCommentsDrawer,
    setComments,
  } = dispatch;

  const { dispatch: dispatchGlobalContext } = useGlobalContext();
  const { setSocket } = dispatchGlobalContext;
  const { values } = useGlobalContext();
  const { socket } = values;
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: <Link to="/">Account</Link>,
    },

    {
      key: "2",
      danger: true,
      label: (
        <div
          onClick={() => {
            localStorage.removeItem(USER_INFO);
            navigate(ROUTES.login);
          }}
        >
          {"Logout"}
        </div>
      ),
    },
  ];
  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);
  }, []);
  useEffect(() => {
    if (socket) socket.emit("newUser", "zohre@gmail.com");
    socket?.on("receiveMessage", ({ senderEmail, message }) => {
      setComments((prev = []) => [
        ...prev,
        { email: senderEmail, message: message },
      ]);
    });
  }, [socket]);
  const zozo = () => {
    console.log("comments are: ", comments);
  };
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
        <Badge count={comments ? comments.length : 0}>
          <Button
            className="headerButton"
            icon={<MailOutlined />}
            onClick={() => setOpenCommentsDrawer(true)}
          />
        </Badge>

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
      <div>
        <Button onClick={zozo} type="primary">
          Show All
        </Button>
      </div>
    </Flex>
  );
};
export default AppHeader;
