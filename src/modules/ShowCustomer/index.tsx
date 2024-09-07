import { Button, Flex, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./components/breadcrum/breadcrum";
import { EditOutlined, UnorderedListOutlined } from "@ant-design/icons";

const ShowCustomer = () => {
  const { Text } = Typography;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Show Customer</Title>
      <Breadcrum />;
      <Flex vertical gap={30} className="mt-8 p-4 bg-white">
        <Flex align="center" gap="small" justify="end">
          <Button icon={<UnorderedListOutlined />}>Customers</Button>
          <Button icon={<EditOutlined />}>Edit</Button>
        </Flex>
        <Space direction="vertical">
          <Title level={5}>Full Name</Title>
          <Text>Zohre Mehrabi</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Status</Title>
          <Text>Approved</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Email</Title>
          <Text>Zohre@gmail.com</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Date Of Birth</Title>
          <Text>1998/2/07</Text>
        </Space>
      </Flex>
    </Space>
  );
};
export default ShowCustomer;
