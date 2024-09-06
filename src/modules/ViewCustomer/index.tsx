import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./components/breadcrum/breadcrum";

const ViewCustomer = () => {
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Edit Customer</Title>
      <Breadcrum />;
      <Flex vertical gap={16} className="mt-8 bg-white">
        <div></div>
      </Flex>
    </Space>
  );
};
export default ViewCustomer;
