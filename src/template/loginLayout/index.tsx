import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="flex items-center justify-center border border-pink-500 h-screen w-screen">
      <Flex align="center" className="bg-gradient-135 shadow-authBoxShadow">
        <Space className=" flex-1 h-full w-full p-[50px]">
          <Title level={2} className="!text-white !font-bold">
            WELCOME TO ADMIN PANEL
          </Title>
        </Space>
        <div className="bg-white flex-1 p-[50px]">
          <Outlet />
        </div>
      </Flex>
    </div>
  );
};
export default LoginLayout;
