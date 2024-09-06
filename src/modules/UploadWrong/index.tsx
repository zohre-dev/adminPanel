import { Button, Flex, Form, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import Breadcrum from "./components/breadcrum/breadcrum";

const UploadWrong = () => {
  const [form] = Form.useForm();
  const { Text } = Typography;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Flex align="center" justify="start" gap="small">
        <ArrowLeftOutlined className="w-12 h-12 cursor-pointer" />
        <Title level={1}>New Customer</Title>
      </Flex>

      <Breadcrum />
      <Flex
        vertical
        align="center"
        justify="center"
        gap={32}
        className="mt-8 bg-white py-[148px] rounded-md"
      >
        <Space
          direction="vertical"
          className="rounded-md border-[1px] border-[#FF1F25] p-8"
        >
          <Text className="text-[#FF1F25]">
            file-cewkhfrrawdescenidingzoz.txt
          </Text>
          <Text className="text-[#6C757D]">34 KB</Text>
        </Space>
        <Space direction="vertical" className="text-center">
          <Title level={2}>The file type is wrong!</Title>
          <Text>
            Please upload <Text strong>XLSX</Text> files
          </Text>
          <Text>
            A file maximum szie should be <Text strong>5 MB</Text>
          </Text>
        </Space>
        <Flex gap="small" justify="center" align="center">
          <Button type="primary" size="large">
            <UploadOutlined />
            UPLOAD FILE
          </Button>
          <Button type="primary" ghost size="large">
            ENTER DATA MANUALLY
          </Button>
        </Flex>
      </Flex>
    </Space>
  );
};

export default UploadWrong;
