import { Button, Flex, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./components/breadcrum/breadcrum";
import { EditOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useGetCustomerByIdQuery } from "../../services/customerApi/customerApi";
import { useParams } from "react-router-dom";

const ShowCustomer = () => {
  const { id } = useParams();
  const { data } = useGetCustomerByIdQuery(id!);
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
          <Text>{data && `${data.firstName} ${data.lastName}`}</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Status</Title>
          <Text>
            {data && data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Email</Title>
          <Text>{data && data.email}</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Id Number</Title>
          <Text>{data && data.idNumber}</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Phone Number</Title>
          <Text>{data && data.phoneNumber}</Text>
        </Space>
        <Space direction="vertical">
          <Title level={5}>Date Of Birth</Title>
          <Text>{data && data.birthDayDate}</Text>
        </Space>
      </Flex>
    </Space>
  );
};
export default ShowCustomer;
